import React from "react";
import { styled, theme } from "../../../config/stiches.config";
import { ButtonText } from "../../typography/ButtonText";
import { Slot } from "@radix-ui/react-slot";
import { SizeOptions } from "../../../core/types/sizeOptions";
import { Ring } from "react-spinners-css";
import { CSS } from "@stitches/react";

type ButtonRaw = JSX.IntrinsicElements["button"] & { css?: CSS<{}> };
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

function RawComponent(props: ButtonProps) {
  const Component = !props.asChild ? "button" : Slot;
  const StyledButton = styled(Component, {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    borderRadius: 4,
    height: "3.25rem",
    padding: "0.5rem 1rem",
    backgroundColor: theme.colors.primary600,
    color: theme.colors.neutralWhite,
    border: `1px solid ${theme.colors.primary600}`,
    boxShadow: "none",
    transition: "background-color 100ms",
    "&:has(:nth-child(2)):disabled": {
      backgroundColor: theme.colors.primary600WithLoading,
    },

    "&:hover": {
      backgroundColor: theme.colors.primary700,
      borderColor: theme.colors.primary700,
    },
    "&:is(:active, :focus)": {
      backgroundColor: theme.colors.primary800,
      borderColor: theme.colors.primary800,
      outline: `2px solid ${theme.colors.primary100}`,
    },
    "&:disabled": {
      backgroundColor: theme.colors.miscDisabled,
      cursor: "not-allowed",
      outlined: "0",
      borderColor: theme.colors.miscDisabled,
    },
    variants: {
      variant: {
        outlined: {
          backgroundColor: "transparent",
          "> span": {
            color: theme.colors.primary600,
          },
          "&:is(:active, :focus)": {
            backgroundColor: "transparent",
            outline: "none",
            "> span": {
              color: theme.colors.primary600,
            },
          },
          "&:hover": {
            backgroundColor: theme.colors.primary600,
            borderColor: theme.colors.primary600,
            "> span": {
              color: theme.colors.neutralWhite,
            },
          },
        },
        filled: {
          backgroundColor: theme.colors.thin,
          borderColor: theme.colors.thin,
          "> span": {
            color: theme.colors.text400,
          },
          "&:is(:active, :focus)": {
            backgroundColor: theme.colors.lightness,
            outline: "none",
            "> span": {
              color: theme.colors.text400,
            },
          },
          "&:hover": {
            backgroundColor: theme.colors.lightness,
            borderColor: theme.colors.lightness,
            "> span": {
              color: theme.colors.text400,
            },
          },
        },
      },
      hoverType: {
        withShadow: {
          "&:hover": {
            boxShadow: "0px 4px 1rem rgb(14, 153, 184, 0.5)",
          },
        },
      },
      color: {
        secondary: {
          backgroundColor: theme.colors.secondary600,
          borderColor: theme.colors.secondary600,
          "&:has(:nth-child(2)):disabled": {
            backgroundColor: theme.colors.secondary600WithLoading,
          },
          "&:hover": {
            backgroundColor: theme.colors.secondary700,
            borderColor: theme.colors.secondary700,
          },
          "&:is(:active, :focus)": {
            backgroundColor: theme.colors.secondary800,
            borderColor: theme.colors.secondary800,
          },
          "&:disabled": {
            backgroundColor: theme.colors.miscDisabled,
            cursor: "not-allowed",
            outlined: "0",
            borderColor: theme.colors.miscDisabled,
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

export function Button({
  size = "default",
  loadingText = "Carregando...",
  wFull,
  ...props
}: ButtonProps) {
  return (
    <RawComponent
      size={size}
      disabled={props.disabled || props.loading}
      css={wFull ? { width: "100%" } : {}}
      {...props}
    >
      {props.loading ? (
        <>
          <ButtonText size={size}>{loadingText || props.children}</ButtonText>
          <Ring
            size={18}
            color={theme.colors.neutralWhite as unknown as string}
          />
        </>
      ) : (
        <ButtonText size={size}>{props.children}</ButtonText>
      )}
    </RawComponent>
  );
}
