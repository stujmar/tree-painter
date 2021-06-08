const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      orange: colors.orange,
      green: colors.green
    },
    extend: {
      colors: {
        'acorn-top': '#ECA76D',
        'acorn-bottom': '#945E42',
        'water-blue' : '#75b4e3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
