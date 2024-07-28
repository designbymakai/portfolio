/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.9rem',
      base: '1.1rem',
      xl: '1.35rem',
      '2xl': '1.663rem',
      '3xl': '2.053rem',
      '4xl': '2.541rem',
      '5xl': '3.152rem',
    },
    extend: {
      colors: {
        'dbm-db': '#101827',
        'dbm-lb': {
          // 300 is main colour
          100: '#abe0ec',
          200: '#57c1da',
          300: '#258EA6', 
          400: '#124753'
        },
        'dbm-gr': '#75704E',
        'dbm-w': '#E5E7EB',
        'dbm-pr': {
          // 200 is main colour
          100: '#c4add8',
          200: '#9368B7', 
          300: '#5f3c7d',
          400: '#2b1b38'
        },
        'dbm-cr': {
          // 200 is main colour
          100: '#ffd3c6',
          200: '#ff8360',
          300: '#f93700',
          400: '#932000'
        }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}}