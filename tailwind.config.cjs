
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      main: colors.sky,
      pink: colors.pink,
      green: colors.green,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
