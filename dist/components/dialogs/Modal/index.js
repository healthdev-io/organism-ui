import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState, } from "react";
import { createPortal } from "react-dom";
import { styled } from "@stitches/react";
import { theme } from "../../../config/stiches.config";
import FocusTrap from "focus-trap-react";
var ModalBackground = styled("div", {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "$$overlayColor",
    backdropFilter: "blur($$overlayBlur)",
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
var CompModal = function (_a, ref) {
    var open = _a.open, onClose = _a.onClose, size = _a.size, _b = _a.closeOnEsc, closeOnEsc = _b === void 0 ? true : _b, _c = _a.closeOnOverlayClick, closeOnOverlayClick = _c === void 0 ? true : _c, _d = _a.overlayBlur, overlayBlur = _d === void 0 ? "0" : _d, _e = _a.overlayColor, overlayColor = _e === void 0 ? "rgba(0, 0, 0, 0.7)" : _e, children = _a.children, _f = _a.stopPropagation, stopPropagation = _f === void 0 ? false : _f, _g = _a.preventDefault, preventDefault = _g === void 0 ? false : _g;
    var _h = useState(null), portalRoot = _h[0], setPortalRoot = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var _k = useState(false), show = _k[0], setShow = _k[1];
    var handleOpen = function () { return setVisible(true); };
    var handleClose = useCallback(function () {
        if (onClose && open !== undefined) {
            onClose();
        }
        setShow(false);
        setTimeout(function () {
            setVisible(false);
        }, 100);
    }, [onClose, open]);
    var handleBackgroundClick = function (e) {
        if (stopPropagation) {
            e.stopPropagation();
        }
        if (preventDefault) {
            e.preventDefault();
        }
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            handleClose();
        }
    };
    useImperativeHandle(ref, function () { return ({
        open: handleOpen,
        close: handleClose,
        isOpened: visible,
    }); });
    useEffect(function () {
        var parent = document.createElement("div");
        document.body.appendChild(parent);
        setPortalRoot(parent);
        return function () {
            document.body.removeChild(parent);
        };
    }, []);
    useEffect(function () {
        if (visible) {
            document.body.style.overflow = "hidden";
            setShow(true);
        }
        else {
            document.body.style.overflow = "";
        }
    }, [visible]);
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Escape") {
                if (visible && closeOnEsc) {
                    handleClose();
                }
            }
        };
        if (visible) {
            document.addEventListener("keydown", handleKeyDown);
        }
        else {
            document.removeEventListener("keydown", handleKeyDown);
        }
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose, closeOnEsc, visible]);
    useEffect(function () {
        if (open) {
            setVisible(true);
        }
        else {
            handleClose();
        }
    }, [open, handleClose]);
    if (!portalRoot || !visible) {
        return null;
    }
    return createPortal(React.createElement(ModalBackground, { css: {
            $$overlayColor: overlayColor,
            $$overlayBlur: overlayBlur,
        }, show: show, onClick: handleBackgroundClick },
        React.createElement(FocusTrap, { focusTrapOptions: { allowOutsideClick: true } },
            React.createElement(ModalContent, { size: size, show: show, id: "modal-content" }, children))), portalRoot);
};
export var Modal = forwardRef(CompModal);
