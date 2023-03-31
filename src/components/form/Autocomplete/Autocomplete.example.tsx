import React from 'react';
import { Story } from "@storybook/react";
import { Autocomplete, AutocompleteProps } from ".";
import { ExampleContainer } from "../../../core/exampleHelpers/ExampleContainer";

 export const AutocompleteExample: Story<AutocompleteProps> = (args) => {
  return (
    <ExampleContainer>
      <Autocomplete {...args} />
    </ExampleContainer>
  );
 }