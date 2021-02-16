const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
      },
      secondary: 'var(--color-secondary)',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      green: colors.emerald,
      lime: colors.lime,
      teal: colors.teal,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      pink: colors.pink,
    },
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active']
    },
  },
  plugins: [],
}
