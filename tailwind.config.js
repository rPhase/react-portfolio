/** @type {import('tailwindcss').Config} */

// Utility
const mix = (name) =>
  `color-mix(in srgb, var(${name}) calc(100% * <alpha-value>), transparent)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["'Open Sans'"],
        lato: ['Lato'],
        mPLUSRounded1c: ["'M PLUS Rounded 1c'"],
      },
      cursor: {
        point: "url('/src/assets/cursors/cursor.png'), default",
        select:
          "url('/src/assets/cursors/icons8-select-cursor-48.png'), default",
      },
      colors: {
        background: mix('--color-background'),
        primary: mix('--color-primary'),
        secondary: mix('--color-secondary'),
        tBase: mix('--color-text-base'),
      },
    },
  },
  plugins: [],
};
