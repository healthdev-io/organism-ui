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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { styled } from "../../../config/stiches.config";
var InputWrapper = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
});
var InputLabel = styled("label", {
    width: "fit-content",
    fontWeight: 400,
    fontSize: ".875rem",
    lineHeight: "1.3125rem",
    color: "$text500",
    marginBottom: ".25rem",
});
var StyledInput = styled("input", {
    height: 45,
    padding: ".75rem 1rem",
    fonteWeight: 400,
    fontSize: ".875rem",
    lineHeight: "1.3125rem",
    color: "$text400",
    borderRadius: 4,
    background: "$neutralWhite",
    border: "1px solid #e4e4e4",
    "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: '#f1f1f1'
    },
    "&:focus": {
        outline: 0,
        borderColor: "$primary600",
    },
});
var InputError = styled("span", {
    color: "red",
    width: "fit-content",
    fontWeight: 400,
    fontSize: ".75rem",
    lineHeight: "1.3125rem",
    marginBottom: ".25rem",
});
var InputRequiredMarker = styled('span', {
    color: 'red',
});
export var Input = function (_a) {
    var error = _a.error, label = _a.label, rest = __rest(_a, ["error", "label"]);
    return (React.createElement(InputWrapper, null,
        React.createElement(InputLabel, { htmlFor: rest.id },
            label,
            " ",
            rest.required && React.createElement(InputRequiredMarker, null, "*")),
        React.createElement(StyledInput, __assign({}, rest)),
        error && React.createElement(InputError, null, error)));
};
