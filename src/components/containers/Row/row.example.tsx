import { Story } from "@storybook/react";
import React from "react";
import { Row, RowProps } from ".";
import { Button } from "../../form/Button";

export const RowExample: Story<RowProps> = (args) => {
  return (
    <Row {...args}>
      <Button>Botão 1</Button>
      <Button size="small">Botão 2</Button>
    </Row>
  );
};
