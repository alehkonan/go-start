/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: 0,
            scale: 0,
          },
          '100%': {
            opacity: 1,
            scale: 1,
          },
        },
      },
      animation: {
        appear: 'appear 150ms linear',
      },
    },
  },
  plugins: [],
};
