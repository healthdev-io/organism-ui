import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {brandImage: 'https://healthdev-assets.s3.amazonaws.com/HealthDev_logo_w.png', ...themes.dark}
});