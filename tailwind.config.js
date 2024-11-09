/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
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
        primary: 'var(--color-primary)',
        primaryDark: 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        secondaryDark: 'var(--color-secondary-dark)',
        bgPrimary: 'var(--color-bg-primary)',
        bgPrimaryDark: 'var(--color-bg-primary-dark)',
        tBase: 'var(--color-text-base)',
        tBaseDark: 'var(--color-text-base-dark)',
      },
    },
  },
  plugins: [],
};
