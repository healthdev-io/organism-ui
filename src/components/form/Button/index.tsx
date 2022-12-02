import React from "react";
import { styled, theme } from "../../../config/stiches.config";
import { ButtonText } from "../../typography/ButtonText";
import { Slot } from "@radix-ui/react-slot";
import { SizeOptions } from "../../../core/types/sizeOptions";

type ButtonRaw = JSX.IntrinsicElements["button"];
interface PropsLike {
  asChild?: boolean;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  size?: SizeOptions;
  hoverType?: "withShadow" | "natural";
}

export type ButtonProps = PropsLike & ButtonRaw;

function RawComponent(props: ButtonProps) {
  const Component = !props.asChild ? "button" : Slot;
  const StyledButton = styled(Component, {
    cursor: "pointer",
    borderRadius: 4,
    height: "3.25rem",
    padding: "0.5rem 1rem",
    backgroundColor: theme.colors.primary600,
    color: theme.colors.neutralWhite,
    border: 0,
    boxShadow: "none",
    transition: "background-color 100ms",
    "&:hover": {
      backgroundColor: theme.colors.primary700,
    },
    "&:is(:active, :focus)": {
      backgroundColor: theme.colors.primary800,
      outline: `2px solid ${theme.colors.primary100}`,
    },
    variants: {
      hoverType: {
        withShadow: {
          "&:hover": {
            boxShadow: "0px 4px 1rem rgba(14, 153, 184, 0.5)",
          },
        },
      },
      color: {
        primary: {
          backgroundColor: theme.colors.primary600,
          color: theme.colors.neutralWhite,
        },
        secondary: {
          backgroundColor: theme.colors.secondary600,
          "&:hover": {
            backgroundColor: theme.colors.secondary700,
          },
          "&:is(:active, :focus)": {
            backgroundColor: theme.colors.secondary800,
          },
        },
      },
      size: {
        small: {
          height: "2.5rem",
        },
        large: {
          height: "4rem",
        },
      },
    },
  });

  return <StyledButton {...(props as any)} />;
}

export function Button({ size = "default", ...props }: ButtonProps) {
  return (
    <RawComponent size={size} {...props}>
      <ButtonText size={size}>{props.children}</ButtonText>
    </RawComponent>
  );
}
