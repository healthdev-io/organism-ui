import { styled } from "@stitches/react";
import React from "react";
export var StyledDivider = styled("div", {
    height: "1px",
    width: "100%",
    backgroundColor: "#F1F1F1",
    marginTop: '$$mt',
    marginBottom: '$$mb'
});
export var HorizontalDivider = function (_a) {
    var mt = _a.mt, mb = _a.mb;
    return React.createElement(StyledDivider, { css: { $$mt: mt, $$mb: mb } });
};
