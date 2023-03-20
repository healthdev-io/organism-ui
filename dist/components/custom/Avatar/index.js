import React, { useEffect } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "../../../config/stiches.config";
import { User } from "@icon-park/react";
var AvatarRoot = styled(AvatarPrimitive.Root, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    borderRadius: "100%",
    backgroundColor: "$primary600",
    variants: {
        size: {
            small: {
                width: 32,
                height: 32,
            },
            default: {
                width: 45,
                height: 45,
            },
            large: {
                width: 64,
                height: 64,
            },
        },
    },
});
var AvatarImage = styled(AvatarPrimitive.Image, {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "inherit",
});
var AvatarFallback = styled(AvatarPrimitive.Fallback, {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$primary800",
    color: "$neutralWhite",
    lineHeight: 1,
    fontWeight: 500,
    variants: {
        size: {
            small: {
                fontSize: 9,
                "svg": {
                    fontSize: 14
                }
            },
            default: {
                fontSize: 15,
                "svg": {
                    fontSize: 20
                }
            },
            large: {
                fontSize: 23,
                "svg": {
                    fontSize: 28
                }
            }
        }
    },
});
export var Avatar = function (_a) {
    var imageAlt = _a.imageAlt, imageUri = _a.imageUri, _b = _a.delayMs, delayMs = _b === void 0 ? 600 : _b, fallbackInitials = _a.fallbackInitials, _c = _a.fallbackType, fallbackType = _c === void 0 ? "initials" : _c, _d = _a.size, size = _d === void 0 ? "default" : _d;
    useEffect(function () {
        if (((fallbackInitials === null || fallbackInitials === void 0 ? void 0 : fallbackInitials.length) || 0) <= 2 && fallbackType === "initials") {
            console.warn("Fallback initials must have at least 1 letter and maximum of 2 letters.");
        }
    }, [fallbackInitials, fallbackType]);
    return (React.createElement(AvatarRoot, { size: size },
        React.createElement(AvatarImage, { src: imageUri, alt: imageAlt }),
        fallbackType === "initials" && (React.createElement(AvatarFallback, { size: size, delayMs: delayMs }, fallbackInitials)),
        fallbackType === "userIcon" && (React.createElement(AvatarFallback, { size: size },
            React.createElement(User, { theme: "outline" })))));
};
