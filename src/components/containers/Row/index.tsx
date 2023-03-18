import { CSS, styled } from "@stitches/react";
import { StyledComponent } from "@stitches/react/types/styled-component";
import React from "react";
import { PropsWithChildren } from "react";
import { FlexAlignOptions } from "../../../core/types/flexAlignOptions";

export interface RowProps {
  children: React.ReactNode;
  align?: FlexAlignOptions;
  justify?: FlexAlignOptions;
  gap?: string | number;
  css?: CSS;
  style?: React.CSSProperties;
}

const StyledDiv = styled("div", {
  display: "flex",
  alignItems: "$$align",
  justifyContent: "$$justify",
  gap: "$$gap",
});

export const Row: React.FC<RowProps> = ({
  children,
  align = "flex-start",
  justify = "flex-start",
  gap,
  css,
  style,
}) => {
  return (
    <StyledDiv
      style={style}
      css={{ $$align: align, $$justify: justify, $$gap: gap, ...css }}
    >
      {children}
    </StyledDiv>
  );
};
