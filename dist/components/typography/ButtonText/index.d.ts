import React from "react";
import { SizeOptions } from "../../../core/types/sizeOptions";
interface PropsLike {
    color?: string;
    size?: SizeOptions;
}
export type ButtonTextProps = PropsLike & JSX.IntrinsicElements["span"];
export declare function ButtonText(props: ButtonTextProps): React.JSX.Element;
export {};
