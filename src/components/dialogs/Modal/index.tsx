export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  size?: ModalSizeOptions;
  overlayColor?: string;
  overlayBlur?: string;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
  stopPropagation?: boolean;
  preventDefault?: boolean;
}

export interface ModalHandles {
  open: () => void;
  close: () => void;
  isOpened: boolean;
}
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { styled } from "@stitches/react";
import { ModalSizeOptions } from "../../../core/types/modalSizeOptions";
import { theme } from "../../../config/stiches.config";
import FocusTrap from "focus-trap-react";

const ModalBackground = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "$$overlayColor",
  backdropFilter: "blur($$overlayBlur)",
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

const CompModal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  {
    open,
    onClose,
    size,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    overlayBlur = "0",
    overlayColor = "rgba(0, 0, 0, 0.7)",
    children,
    stopPropagation = false,
    preventDefault = false,
  },
  ref
) => {
  const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => {
    onClose && onClose();
    setShow(false);
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    if (preventDefault) {
      e.preventDefault();
    }
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      handleClose();
    }
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
    isOpened: visible,
  }));

  useEffect(() => {
    const parent = document.createElement("div");
    document.body.appendChild(parent);
    setPortalRoot(parent);

    return () => {
      document.body.removeChild(parent);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      setShow(true);
    } else {
      document.body.style.overflow = "";
    }
  }, [visible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (visible && closeOnEsc) {
          handleClose();
        }
      }
    };

    if (visible) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, closeOnEsc, visible]);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      handleClose();
    }
  }, [open]);

  if (!portalRoot || !visible) {
    return null;
  }

  return createPortal(
    <ModalBackground
      css={{
        $$overlayColor: overlayColor,
        $$overlayBlur: overlayBlur,
      }}
      show={show}
      onClick={handleBackgroundClick}
    >
      <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
        <ModalContent size={size} show={show} id="modal-content">
          {children}
        </ModalContent>
      </FocusTrap>
    </ModalBackground>,
    portalRoot
  );
};

export const Modal = forwardRef(CompModal);
