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
import React from "react";
import { ModalSizeOptions } from "../../../core/types/modalSizeOptions";
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ModalHandles>>;
