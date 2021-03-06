const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0B0A07',
      pureWhite: '#ffffff',
      white: '#f7f7f9',
      darkBlue: '#0050b3',
      blue: '#4a99d3',
      darkblue: '#0050B3',
      lightBlue: '#d4e4f1',
      red: '#F26C75',
      yellow: '#f3d30e',
      orange: '#e67a00',
      green: '#7fe98a',
      darkgray: '#B4BEC8',
      grey: '#E5E5E5',
      darkRed: '#fa5259',
    },
  },
  variants: {
    extend: { backgroundColor: ['label-checked'], 
    textColor: ['label-checked']
   },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`)
          const yourSelector = 'input'
          return `${yourSelector}:checked ~ .${eClassName}`
        })
      })
    }),
  ],
}
