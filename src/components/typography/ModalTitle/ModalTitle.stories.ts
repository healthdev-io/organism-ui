import { Meta, StoryObj } from "@storybook/react";
import { ModalTitle } from ".";

export default {
  title: "Typography/ModalTitle",
  component: ModalTitle,
} as Meta;

export const Default = {
  args: { children: "Título do modal" },
} as StoryObj;
