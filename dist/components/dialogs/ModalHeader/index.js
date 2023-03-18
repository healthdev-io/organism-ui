import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";
import { Row } from "../../containers/Row";
import { HorizontalDivider } from "../../dividers/HorizontalDivider";
import { CloseButton } from "../../form/CloseButton";
import { ModalTitle } from "../../typography/ModalTitle";
var StyledHeader = styled("header", {
    padding: "1rem 1.5rem",
    paddingBottom: 0,
    backgroundColor: theme.colors.neutralWhite
});
export var ModalHeader = function (props) {
    return (React.createElement(StyledHeader, null,
        React.createElement(Row, { align: "center", justify: "space-between", gap: "1rem" },
            React.createElement(ModalTitle, null, props.title),
            React.createElement(CloseButton, { onClick: props.onClose }, "x")),
        React.createElement(HorizontalDivider, { mt: "1rem" })));
};
