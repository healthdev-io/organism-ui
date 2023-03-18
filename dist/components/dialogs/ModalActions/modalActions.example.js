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
import { ModalActions } from ".";
import { Button } from "../../form/Button";
export var ModalActionsExample = function (args) {
    return (React.createElement(ModalActions, __assign({}, args),
        React.createElement(Button, { variant: "filled" }, "Cancelar"),
        React.createElement(Button, null, "Confirmar")));
};
