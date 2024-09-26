/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

const screens = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '991px',
  lg: '1200px',
  xl: '1440px',
};

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './index.html'],
  theme: {
    extend: {
      screens,
      backgroundImage: {
        skeleton:
          'linear-gradient(90deg,rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%,  rgba(190, 190, 190, 0.2) 63%)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addVariant }) => {
      // registering custom variants
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('before-after', ['&:before', '&:after']);
      addVariant('not-last', '&:not(:last-child)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-disabled', '&:not(:disabled)');
    }),
  ],
};
