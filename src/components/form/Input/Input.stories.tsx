import { Input, InputProps } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { InputExample } from "./input.example";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    css: { control: false },
  },
} as Meta<InputProps>;

export const Default = InputExample.bind({}) as StoryObj<InputProps>;
Default.args = {
  id: "input-example",
  label: "Label",
  placeholder: "exemplo.."
};

export const Required = InputExample.bind({}) as StoryObj<InputProps>;
Required.args = {
  id: "input-required",
  label: "Label",
  required: true,
  placeholder: "exemplo..",
};


export const WithError = InputExample.bind({}) as StoryObj<InputProps>;
WithError.args = {
  id: "input-error",
  label: "Label",
  error: "Campo inválido",
  placeholder: "exemplo.."
};

export const Disabled = InputExample.bind({}) as StoryObj<InputProps>;
Disabled.args = {
  id: "input-error",
  label: "Label",
  disabled: true,
  placeholder: "exemplo..",
  value: "teste"
};

