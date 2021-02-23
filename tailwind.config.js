const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '-20px 20px 20px -20px rgba(0, 0, 0, 0.1), -10px 10px 10px -10px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
        900: 'var(--color-primary-900)',
        800: 'var(--color-primary-800)',
        700: 'var(--color-primary-700)',
        600: 'var(--color-primary-600)',
        500: 'var(--color-primary-500)',
        400: 'var(--color-primary-400)',
        300: 'var(--color-primary-300)',
        200: 'var(--color-primary-200)',
        100: 'var(--color-primary-100)',
        50: 'var(--color-primary-50)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        900: 'var(--color-secondary-900)',
        800: 'var(--color-secondary-800)',
        700: 'var(--color-secondary-700)',
        600: 'var(--color-secondary-600)',
        500: 'var(--color-secondary-500)',
        400: 'var(--color-secondary-400)',
        300: 'var(--color-secondary-300)',
        200: 'var(--color-secondary-200)',
        100: 'var(--color-secondary-100)',
        50: 'var(--color-secondary-50)',
      },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
