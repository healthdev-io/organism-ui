import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";
/**
 * TODO: Improve docs with better examples
 */
var StyledTitle = styled("h1", {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: theme.colors.text500,
});
export var ModalTitle = function (_a) {
    var children = _a.children;
    return React.createElement(StyledTitle, null, children);
};
