import { Story } from "@storybook/react";
import React from "react";
import { Input, InputProps } from ".";
import { ExampleContainer } from "../../../core/exampleHelpers/ExampleContainer";

export const InputExample: Story<InputProps> = (args) => {
  return (
    <ExampleContainer>
      <Input {...args} />
    </ExampleContainer>
  );
};
