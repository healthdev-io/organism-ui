import { Meta, StoryObj } from "@storybook/react";
import { ButtonText, ButtonTextProps } from ".";

export default {
  title: "Typography/ButtonText",
  component: ButtonText,
} as Meta<ButtonTextProps>;

export const Default = {
  args: { children: "Texto do botão" },
} as StoryObj<ButtonTextProps>;
