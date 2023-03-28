import { Story } from "@storybook/react";
import React from "react";
import { Input, InputProps } from ".";
import { styled } from "../../../config/stiches.config";

const ExampleContainer = styled("div", {
  width: "300px",
  backgroundColor: "$neutralWhite",
  padding: "1.5rem",
  borderRadius: "4px",
});

export const InputExample: Story<InputProps> = (args) => {
  return (
    <ExampleContainer>
      <Input {...args} />
    </ExampleContainer>
  );
};
