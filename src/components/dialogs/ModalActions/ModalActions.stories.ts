import { Meta } from "@storybook/react";
import { ModalActions } from ".";
import { ModalActionsExample } from "./modalActions.example";
export default {
  title: "Dialogs/ModalActions",
  component: ModalActions,
} as Meta;

export const Default = ModalActionsExample.bind({});
