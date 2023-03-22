import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";
import { Row } from "../../containers/Row";
var StyledActionsWrapper = styled("div", {
    padding: "1rem 1.5rem",
    backgroundColor: theme.colors.neutralWhite,
});
export var ModalActions = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledActionsWrapper, null,
        React.createElement(Row, { align: "center", justify: "flex-end", gap: "0.5rem" }, children)));
};
