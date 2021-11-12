module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      wcosr_yellow: {
        light: '#fee63c',
        DEFAULT: '#fee63c',
        dark: '#fee63c',
      },
      white: {
        light: '#ffffff',
        DEFAULT: '#ffffff',
        dark: '#ffffff',
      },
      black: {
        light: '#000000',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      darkgrey: {
        light: '#222',
        DEFAULT: '#222',
        dark: '#222',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
