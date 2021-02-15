const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
