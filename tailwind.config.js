module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#E2E8F0',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        mouth: {
          DEFAULT: '#FEBABA',
        },
        purple: {
          DEFAULT: '#CB92B4',
        },
        avatar: {
          DEFAULT: '#FED1BA',
        },
      },
      fontFamily: {
        'mockFlow': ['MockFlowFont1'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
