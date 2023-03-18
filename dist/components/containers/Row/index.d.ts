import { CSS } from "@stitches/react";
import React from "react";
import { FlexAlignOptions } from "../../../core/types/flexAlignOptions";
export interface RowProps {
    children: React.ReactNode;
    align?: FlexAlignOptions;
    justify?: FlexAlignOptions;
    gap?: string | number;
    css?: CSS;
    style?: React.CSSProperties;
}
export declare const Row: React.FC<RowProps>;
