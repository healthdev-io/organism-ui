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
import { styled, theme } from "../../../config/stiches.config";
import { ButtonText } from "../../typography/ButtonText";
import { Slot } from "@radix-ui/react-slot";
import { Ring } from "react-spinners-css";
function RawComponent(props) {
    var Component = !props.asChild ? "button" : Slot;
    var StyledButton = styled(Component, {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        borderRadius: 4,
        height: "3.25rem",
        padding: "0.5rem 1rem",
        backgroundColor: theme.colors.primary600,
        color: theme.colors.neutralWhite,
        border: "1px solid ".concat(theme.colors.primary600),
        boxShadow: "none",
        transition: "background-color 100ms",
        "&:has(:nth-child(2)):disabled": {
            backgroundColor: theme.colors.primary600WithLoading,
        },
        "&:hover": {
            backgroundColor: theme.colors.primary700,
            borderColor: theme.colors.primary700,
        },
        "&:is(:active, :focus)": {
            backgroundColor: theme.colors.primary800,
            borderColor: theme.colors.primary800,
            outline: "2px solid ".concat(theme.colors.primary100),
        },
        "&:disabled": {
            backgroundColor: theme.colors.miscDisabled,
            cursor: "not-allowed",
            outlined: "0",
            borderColor: theme.colors.miscDisabled,
        },
        variants: {
            variant: {
                outlined: {
                    backgroundColor: "transparent",
                    "> span": {
                        color: theme.colors.primary600,
                    },
                    "&:is(:active, :focus)": {
                        backgroundColor: "transparent",
                        outline: "none",
                        "> span": {
                            color: theme.colors.primary600,
                        },
                    },
                    "&:hover": {
                        backgroundColor: theme.colors.primary600,
                        borderColor: theme.colors.primary600,
                        "> span": {
                            color: theme.colors.neutralWhite,
                        },
                    },
                },
            },
            hoverType: {
                withShadow: {
                    "&:hover": {
                        boxShadow: "0px 4px 1rem rgb(14, 153, 184, 0.5)",
                    },
                },
            },
            color: {
                secondary: {
                    backgroundColor: theme.colors.secondary600,
                    borderColor: theme.colors.secondary600,
                    "&:has(:nth-child(2)):disabled": {
                        backgroundColor: theme.colors.secondary600WithLoading,
                    },
                    "&:hover": {
                        backgroundColor: theme.colors.secondary700,
                        borderColor: theme.colors.secondary700,
                    },
                    "&:is(:active, :focus)": {
                        backgroundColor: theme.colors.secondary800,
                        borderColor: theme.colors.secondary800,
                    },
                    "&:disabled": {
                        backgroundColor: theme.colors.miscDisabled,
                        cursor: "not-allowed",
                        outlined: "0",
                        borderColor: theme.colors.miscDisabled,
                    },
                },
            },
            size: {
                small: {
                    height: "2.5rem",
                },
                large: {
                    height: "4rem",
                },
            },
        },
    });
    return React.createElement(StyledButton, __assign({}, props));
}
export function Button(_a) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.loadingText, loadingText = _c === void 0 ? "Carregando..." : _c, wFull = _a.wFull, props = __rest(_a, ["size", "loadingText", "wFull"]);
    return (React.createElement(RawComponent, __assign({ size: size, disabled: props.disabled || props.loading, css: wFull ? { width: "100%" } : {} }, props), props.loading ? (React.createElement(React.Fragment, null,
        React.createElement(ButtonText, { size: size }, loadingText || props.children),
        React.createElement(Ring, { size: 18, color: theme.colors.neutralWhite }))) : (React.createElement(ButtonText, { size: size }, props.children))));
}
