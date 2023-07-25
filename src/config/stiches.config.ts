import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary100: "#1B1292",
      primary600: "#1577E0",
      primary700: "#0466D0",
      primary800: "#0355C0",
      primary600WithLoading: "#1577E0cc",

      secondary600: "#8257e5",
      secondary700: "#7146d4",
      secondary800: "#6035c3",
      secondary600WithLoading: "#6035c3cc",

      neutralWhite: "#FFFFFF",
      neutralBlack: "#000000",

      text400: "#505050",
      text500: "#333333",

      close: '#c4c4c4',
      thin: "#F9F9F9",
      lightness: "#eeeeee",

      miscDisabled: "#CCCCCC",
    },
  },
});
