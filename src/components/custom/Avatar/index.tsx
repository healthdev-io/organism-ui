import React, { useEffect } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "../../../config/stiches.config";
import {  User } from "@icon-park/react";

export interface AvatarProps {
  imageUri?: string;
  imageAlt?: string;
  delayMs?: number;
  fallbackType?: "initials" | "userIcon";
  fallbackInitials?: string;
  size?: "small" | "default" | "large";
}

const AvatarRoot = styled(AvatarPrimitive.Root, {
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

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
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

export const Avatar: React.FC<AvatarProps> = ({
  imageAlt,
  imageUri,
  delayMs = 600,
  fallbackInitials,
  fallbackType = "initials",
  size = "default"
}) => {
  useEffect(() => {
    if ((fallbackInitials?.length || 0) <= 2 && fallbackType === "initials") {
      console.warn(
        "Fallback initials must have at least 1 letter and maximum of 2 letters."
      );
    }
  }, [fallbackInitials, fallbackType]);

  return (
    <AvatarRoot size={size}>
      <AvatarImage src={imageUri} alt={imageAlt} />
      {fallbackType === "initials" && (
        <AvatarFallback size={size} delayMs={delayMs}>{fallbackInitials}</AvatarFallback>
      )}
      {fallbackType === "userIcon" && (
        <AvatarFallback size={size}>
          <User theme="outline" />
        </AvatarFallback>
      )}
    </AvatarRoot>
  );
};
