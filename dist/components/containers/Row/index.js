var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { styled } from "@stitches/react";
import React from "react";
var StyledDiv = styled("div", {
    display: "flex",
    alignItems: "$$align",
    justifyContent: "$$justify",
    gap: "$$gap",
});
export var Row = function (_a) {
    var children = _a.children, _b = _a.align, align = _b === void 0 ? "flex-start" : _b, _c = _a.justify, justify = _c === void 0 ? "flex-start" : _c, gap = _a.gap, css = _a.css, style = _a.style;
    return (React.createElement(StyledDiv, { style: style, css: __assign({ $$align: align, $$justify: justify, $$gap: gap }, css) }, children));
};
