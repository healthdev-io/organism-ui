/// <reference types="react" />
import { SizeOptions } from "../../../core/types/sizeOptions";
import { CSS } from "@stitches/react";
type ButtonRaw = JSX.IntrinsicElements["button"] & {
    css?: CSS<{}>;
};
interface PropsLike {
    asChild?: boolean;
    variant?: "contained" | "outlined" | "filled";
    color?: "primary" | "secondary";
    size?: SizeOptions;
    hoverType?: "withShadow" | "natural";
    loading?: boolean;
    loadingText?: string;
    successText?: string;
    wFull?: boolean;
}
export type ButtonProps = PropsLike & ButtonRaw;
export declare function Button({ size, loadingText, wFull, ...props }: ButtonProps): JSX.Element;
export {};
