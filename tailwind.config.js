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
      green: colors.green,
      amber: colors.amber,
      lime: colors.lime,
      pink: colors.pink,
    },
    extend: {
      colors: {
        'water-blue' : '#75b4e3',
        'purple-grad': 'linear-gradient(0deg, rgba(192,0,255,1) 0%, rgba(37,9,121,1) 100%)'
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '5000': '5000ms',
        'slow': '10000ms'
      },
      boxShadow: {
        glow: '0 0 25px 5px rgba(255, 255, 255, 0.45)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
