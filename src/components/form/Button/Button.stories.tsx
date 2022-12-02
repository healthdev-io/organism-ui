import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Default = {
  args: { children: "Texto do botão", size: "default" },
} as StoryObj<ButtonProps>;
