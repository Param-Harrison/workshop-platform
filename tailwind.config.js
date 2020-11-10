module.exports = {
  theme: {
    extend: {
      maxWidth: {
        content: '70ch',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
      boxShadow: {
        outline: "0 0 0 3px theme('colors.orange.300')",
      }
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled']
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: ['./src/**/*.js'],
};