import { defineConfig, presetWind4, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetWind4({
      dark: 'media',
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        'margin-top': '-4px',
      },
    }),
  ],
});
