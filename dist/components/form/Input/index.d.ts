import React from "react";
interface Props {
    error?: string;
    label?: string;
}
export type InputProps = Props & JSX.IntrinsicElements["input"];
export declare const Input: React.FC<InputProps>;
export {};
