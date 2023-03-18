export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSizeOptions;
  overlayColor?: string;
  overlayBlur?: string;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
}
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "@stitches/react";
import { ModalSizeOptions } from "../../../core/types/modalSizeOptions";
import { theme } from "../../../config/stiches.config";

const ModalBackground = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "$$overlayColor",
  backdropFilter: 'blur($$overlayBlur)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  zIndex: 1000,
  transition: "opacity 100ms ease",
  pointerEvents: "none",
  variants: {
    show: {
      true: {
        opacity: 1,
        pointerEvents: "auto",
      },
    },
  },
});

const ModalContent = styled("div", {
  backgroundColor: theme.colors.neutralWhite,
  overflow: "hidden",
  borderRadius: "8px",
  transform: "scale(0.8)",
  transition: "transform 100ms ease",
  variants: {
    size: {
      small: {
        width: "20%",
      },
      normal: {
        width: "35%",
      },
      medium: {
        width: "50%",
      },
      large: {
        width: "75%",
      },
      fullScreen: {
        width: "100%",
        height: "100%",
        borderRadius: 0,
      },
    },

    show: {
      true: {
        transform: "scale(1)",
      },
    },
  },
});

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  size,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  overlayBlur = "0",
  overlayColor = "rgba(0, 0, 0, 0.7)",
  children,
}) => {
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const parent = document.createElement("div");
    document.body.appendChild(parent);
    setPortalRoot(parent);

    return () => {
      document.body.removeChild(parent);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setVisible(true);
      setTimeout(() => setShow(true), 10);
    } else {
      document.body.style.overflow = "";
      setShow(false);
      const timer = setTimeout(() => setVisible(false), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (closeOnEsc) {
          onClose();
        }
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, closeOnEsc]);

  if (!portalRoot || !visible) {
    return null;
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackground css={{
      $$overlayColor: overlayColor,
      $$overlayBlur: overlayBlur
    }} show={show} onClick={handleBackgroundClick}>
      <ModalContent size={size} show={show}>
        {children}
      </ModalContent>
    </ModalBackground>,
    portalRoot
  );
};
