import React from "react";
export interface ModalHeaderProps {
    title: string;
    onClose: () => void;
    stopPropagation?: boolean;
    preventDefault?: boolean;
}
export declare const ModalHeader: React.FC<ModalHeaderProps>;
