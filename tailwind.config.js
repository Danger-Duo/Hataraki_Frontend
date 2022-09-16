/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        light: '#d9faff',
        dark: '#000a17',
      },
      textColor: {
        primary: '#00204a',
        secondary: '#00367d',
        dark: '#f8f8f8',
      },
    },
  },
  plugins: [],
};
