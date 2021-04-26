module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
