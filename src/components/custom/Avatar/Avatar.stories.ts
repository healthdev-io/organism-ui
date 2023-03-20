import { Avatar, AvatarProps } from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    delayMs: {
      control: { type: "range", min: 0, max: 3000 },
    },
    fallbackType: {
      control: { type: "radio", options: ["initials", "userIcon"] },
    },
    size: {
      control: { type: "radio", options: ["small", "default", "large"] },
    },
  },
} as Meta<AvatarProps>;

export const Default = {
  args: {
    imageUri:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    imageAlt: "Username",
    delayMs: 600,
    fallbackInitials: "UN",
    fallbackType: "initials",
    size: "default",
  },
} as StoryObj<AvatarProps>;

export const FallbackInitials = {
  args: {
    delayMs: 0,
    fallbackInitials: "UN",
    fallbackType: "initials"
  },
} as StoryObj<AvatarProps>;

export const FallbackUserIcon = {
  args: {
    delayMs: 0,
    fallbackType: "userIcon",
  },
} as StoryObj<AvatarProps>;

export const CustomSize = {
  args: {
    imageUri:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
    imageAlt: "Username",
    delayMs: 600,
    size: "large",
    fallbackType: "initials",
    fallbackInitials: "UN"
  },
} as StoryObj<AvatarProps>;