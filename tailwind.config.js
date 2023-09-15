/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(191,139,255,0.35)",
          "0 0px 65px rgba(191,139,255,0.2)"
        ],
      },
      colors: {
        'victorViolet': '#bf8bff',
      },
      keyframes: {
        'strokefill': {
          '0%': {
            width: '0%',
            height: '1px',
          },
          '50%': {
            width: '100%',
            height: '1px',
          },
          '100%': {
            width: '100%',
            height: '100%',
            backgroundColor: '#bf8bff',
          },
        },
      },
      animation: {
        'strokefill': 'strokefill 1s forwards',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'a:hover::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '0%',
          height: '1px',
          backgroundColor: 'transparent',
          transitionProperty: 'width, background-color',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-in-out',
          zIndex: '-1',
        },
        'a:hover': {
          position: 'relative',
          zIndex: '1',
        },
        'a:hover::after': {
          width: '100%',
          backgroundColor: '#bf8bff',
        },
      });
    },
  ],
};
