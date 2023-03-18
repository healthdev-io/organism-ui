import { ModalHeader, ModalHeaderProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Dialogs/ModalHeader",
  component: ModalHeader,
} as Meta<ModalHeaderProps>;

export const Default = {
  args: {
    onClose() {
      console.log("Here you close your modal");
    },
    title: "Título do modal",
  },
} as StoryObj<ModalHeaderProps>;
