import { Autocomplete, AutocompleteProps } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { AutocompleteExample } from "./Autocomplete.example";

export default {
  title: "Form/Autocomplete",
  component: Autocomplete,
  argTypes: {
    css: { control: false },
  },
} as Meta<AutocompleteProps>;

export const Default = AutocompleteExample.bind(
  {}
) as StoryObj<AutocompleteProps>;
Default.args = {};

export const Labeled = AutocompleteExample.bind(
  {}
) as StoryObj<AutocompleteProps>;
Labeled.args = {
  label: "Autocomplete",
};
