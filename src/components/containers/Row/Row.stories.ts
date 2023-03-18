import { Meta } from "@storybook/react";
import { Row, RowProps } from ".";
import { RowExample } from "./row.example";

export default {
  title: "Containers/Row",
  component: Row,
} as Meta<RowProps>;

export const Default = RowExample.bind({});

Default.args = {
  align: "center",
  justify: "flex-start",
  gap: "1rem",
} as RowProps;