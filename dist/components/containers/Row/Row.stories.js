import { Row } from ".";
import { RowExample } from "./row.example";
export default {
    title: "Containers/Row",
    component: Row,
};
export var Default = RowExample.bind({});
Default.args = {
    align: "center",
    justify: "flex-start",
    gap: "1rem",
};
