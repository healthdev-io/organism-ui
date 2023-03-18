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
import { CloseSmall } from "@icon-park/react";
import { styled } from "@stitches/react";
import React from "react";
import { theme } from "../../../config/stiches.config";
var StyledButton = styled("button", {
    cursor: "pointer",
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: 0,
    transition: 'all 100ms',
    fontSize: '1rem',
    color: theme.colors.close,
    "&:hover": {
        backgroundColor: " rgba(1, 167, 204, 0.1)",
        color: theme.colors.primary600,
    },
});
export var CloseButton = function (props) {
    return (React.createElement(StyledButton, __assign({}, props),
        React.createElement(CloseSmall, { theme: "outline" })));
};
