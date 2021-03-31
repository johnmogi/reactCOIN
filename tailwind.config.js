const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}, 
     colors: {
      red: '#e53e3e',
      green : 'green',
      purple : 'purple',
      orange : '#e24e3e'
    },
    fontFamily: {
      'display': ['Oswald'],
      'body': ['Open Sans']
     }

  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
