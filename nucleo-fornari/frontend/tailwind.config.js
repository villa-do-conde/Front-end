const { paste } = require('@testing-library/user-event/dist/paste');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    colors: {
      blue: {
        main: '#3285fa',
        pastel: '#82aae5',
        dark: '#001438',
      },
      purple: {
        main: '#7d2afa',
        pastel: '#c7a8e7',
        dark: '#2a2041',
      },
      white: {
        main: '#edebeb'
      },
      black: {
        main: '#141414'
      }     
    },

    extend: {},
  },
  plugins: [],
}

