import { styled } from "@stitches/react";
import React from "react";

/**
 * TODO: Before we have to improve the docs with a example usage
 */

export interface HorizontalDividerProps {
  mt?: string | number;
  mb?: string | number;
}

export const StyledDivider = styled("div", {
  height: "1px",
  width: "100%",
  backgroundColor: "#F1F1F1",
  marginTop: '$$mt',
  marginBottom: '$$mb'
});

export const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  mt,
  mb,
}) => {
  return <StyledDivider css={{ $$mt: mt, $$mb: mb }} />;
};
