import "../src/theme/global.css";
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: {brandImage: 'https://healthdev-assets.s3.amazonaws.com/HealthDev_logo_w.png', ...themes.dark},
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
