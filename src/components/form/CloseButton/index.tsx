import { CloseSmall } from "@icon-park/react";
import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";

const StyledButton = styled("button", {
  cursor: "pointer",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: 0,
  transition: 'all 100ms',
  fontSize: '1rem',
  color: theme.colors.close,

  "&:hover": {
    backgroundColor: " rgba(1, 167, 204, 0.1)",
    color: theme.colors.primary600,
  },
});

export const CloseButton: React.FC<JSX.IntrinsicElements["button"]> = (
  props
) => {
  return (
    <StyledButton {...(props as any)}>
      <CloseSmall theme="outline" />
    </StyledButton>
  );
};
