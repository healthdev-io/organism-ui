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
import { Row } from ".";
import { Button } from "../../form/Button";
export var RowExample = function (args) {
    return (React.createElement(Row, __assign({}, args),
        React.createElement(Button, null, "Bot\u00E3o 1"),
        React.createElement(Button, { size: "small" }, "Bot\u00E3o 2")));
};
