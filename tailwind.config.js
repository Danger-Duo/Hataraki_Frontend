/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-font': '#00204a',
      'light-bg': '#d9faff',
      'secondary-font': '#00367d',
      'dark-bg': '#000a17',
      'dark-font': '#f8f8f8',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
