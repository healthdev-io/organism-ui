import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { styled } from "@stitches/react";
import { theme } from "../../../config/stiches.config";
var ModalBackground = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "$$overlayColor",
    backdropFilter: 'blur($$overlayBlur)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    zIndex: 1000,
    transition: "opacity 100ms ease",
    pointerEvents: "none",
    variants: {
        show: {
            true: {
                opacity: 1,
                pointerEvents: "auto",
            },
        },
    },
});
var ModalContent = styled("div", {
    backgroundColor: theme.colors.neutralWhite,
    overflow: "hidden",
    borderRadius: "8px",
    transform: "scale(0.8)",
    transition: "transform 100ms ease",
    variants: {
        size: {
            small: {
                width: "20%",
            },
            normal: {
                width: "35%",
            },
            medium: {
                width: "50%",
            },
            large: {
                width: "75%",
            },
            fullScreen: {
                width: "100%",
                height: "100%",
                borderRadius: 0,
            },
        },
        show: {
            true: {
                transform: "scale(1)",
            },
        },
    },
});
export var Modal = function (_a) {
    var open = _a.open, onClose = _a.onClose, size = _a.size, _b = _a.closeOnEsc, closeOnEsc = _b === void 0 ? true : _b, _c = _a.closeOnOverlayClick, closeOnOverlayClick = _c === void 0 ? true : _c, _d = _a.overlayBlur, overlayBlur = _d === void 0 ? "0" : _d, _e = _a.overlayColor, overlayColor = _e === void 0 ? "rgba(0, 0, 0, 0.7)" : _e, children = _a.children;
    var _f = useState(null), portalRoot = _f[0], setPortalRoot = _f[1];
    var _g = useState(false), visible = _g[0], setVisible = _g[1];
    var _h = useState(false), show = _h[0], setShow = _h[1];
    useEffect(function () {
        var parent = document.createElement("div");
        document.body.appendChild(parent);
        setPortalRoot(parent);
        return function () {
            document.body.removeChild(parent);
        };
    }, []);
    useEffect(function () {
        if (open) {
            document.body.style.overflow = "hidden";
            setVisible(true);
            setTimeout(function () { return setShow(true); }, 10);
        }
        else {
            document.body.style.overflow = "";
            setShow(false);
            var timer_1 = setTimeout(function () { return setVisible(false); }, 100);
            return function () { return clearTimeout(timer_1); };
        }
    }, [open]);
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Escape") {
                if (closeOnEsc) {
                    onClose();
                }
            }
        };
        if (open) {
            document.addEventListener("keydown", handleKeyDown);
        }
        else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose, closeOnEsc]);
    if (!portalRoot || !visible) {
        return null;
    }
    var handleBackgroundClick = function (e) {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };
    return createPortal(React.createElement(ModalBackground, { css: {
            $$overlayColor: overlayColor,
            $$overlayBlur: overlayBlur
        }, show: show, onClick: handleBackgroundClick },
        React.createElement(ModalContent, { size: size, show: show }, children)), portalRoot);
};
