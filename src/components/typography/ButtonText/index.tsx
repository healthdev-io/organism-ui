import React from "react";
import { styled, theme } from "../../../config/stiches.config";
import { SizeOptions } from "../../../core/types/sizeOptions";

interface PropsLike {
  color?: string;
  size?: SizeOptions;
}

export type ButtonTextProps = PropsLike & JSX.IntrinsicElements["span"];

const StyledButtonText = styled("span", {
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: "120%",
  color: theme.colors.neutralWhite,
  variants: {
    size: {
      large: {
        fontSize: "1rem",
      },
      small: {
        fontSize: "0.875rem",
        fontWeight: "400",
      },
    },
  },
});

export function ButtonText(props: ButtonTextProps) {
  return (
    <StyledButtonText css={{ color: props.color }} {...(props as any)}>
      {props.children}
    </StyledButtonText>
  );
}
