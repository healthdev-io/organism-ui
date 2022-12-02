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
      primary600: "#01A7CC",
      primary700: "#0E99B8",
      primary800: "#0D88A7",
      primary600WithLoading: "#01A7CCcc",

      secondary600: "#8257e5",
      secondary700: "#7146d4",
      secondary800: "#6035c3",
      secondary600WithLoading: "#6035c3cc",

      neutralWhite: "#FFFFFF",
      neutralBlack: "#000000",

      miscDisabled: "#CCCCCC",
    },
  },
});
