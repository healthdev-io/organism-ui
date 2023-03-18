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
import React from "react";
import { ModalSizeOptions } from "../../../core/types/modalSizeOptions";
export declare const Modal: React.FC<ModalProps>;
