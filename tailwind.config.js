/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif']
      },
      borderRadius: {
        primary: '20px'
      },
      boxShadow: {
        '3xl': '14px 17px 40px 4px',
        inset: 'inset 0px 18px 22px',
        darkinset: '0px 4px 4px inset'
      },
      colors: () => ({
        white: '#ffffff',
        lightPrimary: '#F4F7FE',
        blueSecondary: '#4318FF',
        darkBlueLinear: '#868CFF',
        shadow: {
          500: 'rgba(112, 144, 176, 0.08)'
        },
        darkBlue: {
          400: '#7551FF',
          500: '#422AFB',
          700: '#2111A5',
          800: '#190793',
          900: '#11047A'
        },
        navy: {
          700: '#1B254B',
          800: '#111c44',
          900: '#0b1437'
        },
        gray: {
          600: '#a3aed0'
        }
      })
    }
  },
  plugins: []
}
