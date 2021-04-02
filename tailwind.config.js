const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      pureWhite: '#FFFFFF',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0boa07',
      white: '#f7f7f9',
      darkBlue: '#0050b3',
      blue: '#4a99d3',
      lightBlue: '#d4e4f1',
      red: '#F26C75',
      yellow: '#f3d30e',
      orange: '#e67a00',
      green: '#7fe98a',
      darkgray: '#B4BEC8',
      grey: '#E5E5E5',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
