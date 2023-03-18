import React from "react";
export interface ModalHeaderProps {
    title: string;
    onClose: () => void;
}
export declare const ModalHeader: React.FC<ModalHeaderProps>;
