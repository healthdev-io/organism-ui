import React from "react";

type PropsLike = {
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
};

export type ButtonProps = PropsLike & JSX.IntrinsicElements["button"];

export const Button: React.FC<ButtonProps> = ({ color, variant, ...rest }) => {
  return <button {...rest} />;
};
