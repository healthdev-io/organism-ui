import React from "react";
export interface AvatarProps {
    imageUri?: string;
    imageAlt?: string;
    delayMs?: number;
    fallbackType?: "initials" | "userIcon";
    fallbackInitials?: string;
    size?: "small" | "default" | "large";
}
export declare const Avatar: React.FC<AvatarProps>;
