import { Meta } from "@storybook/react";
import { Modal, ModalProps } from ".";
import { ModalExample } from "./modal.example";

export default {
  title: "Dialogs/Modal",
  component: Modal,
} as Meta;

export const Default = ModalExample.bind({});
Default.args = {
  size: "normal",
  closeOnEsc: true,
  closeOnOverlayClick: true,
} as ModalProps;

export const FullScreen = ModalExample.bind({});
FullScreen.args = {
  size: "fullScreen",
  closeOnEsc: true,
  closeOnOverlayClick: true,
} as ModalProps;

export const WithCustomOverlay = ModalExample.bind({});
WithCustomOverlay.args = {
  size: "normal",
  closeOnEsc: true,
  closeOnOverlayClick: true,
  overlayBlur: '25px',
  overlayColor: 'rgba(255, 0 ,0, 0.5)'
} as ModalProps;
