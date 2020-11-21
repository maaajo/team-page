const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', ...defaultTheme.fontFamily.sans],
        heading: ['PT Serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
