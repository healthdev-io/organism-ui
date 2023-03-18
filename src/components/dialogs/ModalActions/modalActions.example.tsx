import { Story } from "@storybook/react";
import React from "react";
import { ModalActions } from ".";
import { Button } from "../../form/Button";

export const ModalActionsExample: Story = (args) => {
  return (
    <ModalActions {...args}>
      <Button variant="filled">Cancelar</Button>
      <Button>Confirmar</Button>
    </ModalActions>
  );
};
