import { Button, ButtonProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    css: { control: false },
  },
} as Meta<ButtonProps>;

export const Default = {
  args: { children: "Texto do botão", size: "default" },
} as StoryObj<ButtonProps>;

export const Disabled = {
  args: { children: "Texto do botão", size: "default", disabled: true },
} as StoryObj<ButtonProps>;

export const Loading = {
  args: {
    children: "Texto do botão",
    size: "default",
    loading: true,
    loadingText: "Carregando...",
  },
} as StoryObj<ButtonProps>;

export const Outlined = {
  args: {
    children: "Texto do botão",
    size: "default",
    variant: "outlined",
  },
} as StoryObj<ButtonProps>;

export const Filled = {
  args: {
    children: "Texto do botão",
    size: "default",
    variant: "filled",
  },
} as StoryObj<ButtonProps>;
