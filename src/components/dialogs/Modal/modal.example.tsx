import { styled } from "@stitches/react";
import { Story } from "@storybook/react";
import React from "react";
import { useState } from "react";
import { Modal, ModalProps } from ".";
import { Button } from "../../form/Button";
import { ModalHeader } from "../ModalHeader";
import { ModalActions } from "../ModalActions";

const YourStyledContent = styled("div", {
  padding: "1rem 1.5rem",
});

export const ModalExample: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/**You can use the ModalHeader and ModalActions if you want or need */}
      <Button onClick={handleOpenModal}>Abrir modal</Button>
      <Modal {...args} open={isOpen} onClose={handleCloseModal}>
        <ModalHeader title="Modal exemplo" onClose={handleCloseModal} />
        <YourStyledContent>Here you drop your content!</YourStyledContent>
        <ModalActions>
          <Button size="default" variant="filled" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button size="default">Confirmar</Button>
        </ModalActions>
      </Modal>
    </>
  );
};
