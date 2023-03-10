/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'Merri'  : ['Merriweather', 'serif'],
      'pt-sans': ['PT Sans', 'sans-serif'],
      'roboto' : ['Roboto', 'sans-serif'],
      'mont'   : ['Montserrat', 'sans-serif'],
      'lato'   : ['Lato', 'sans-serif'],
      'open'   : ['Open Sans', 'sans-serif'],
      sans : ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}