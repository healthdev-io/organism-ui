import { styled } from "@stitches/react";
import React from "react";
import { PropsWithChildren } from "react";
import { theme } from "../../../config/stiches.config";

/**
 * TODO: Improve docs with better examples
 */

const StyledTitle = styled("h1", {
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: theme.colors.text500,
});

export const ModalTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
