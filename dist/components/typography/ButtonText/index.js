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
import React from "react";
import { styled, theme } from "../../../config/stiches.config";
var StyledButtonText = styled("span", {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "120%",
    color: theme.colors.neutralWhite,
    variants: {
        size: {
            large: {
                fontSize: "1rem",
            },
            small: {
                fontSize: "0.875rem",
                fontWeight: "400",
            },
        },
    },
});
export function ButtonText(props) {
    return (React.createElement(StyledButtonText, __assign({ css: { color: props.color } }, props), props.children));
}
