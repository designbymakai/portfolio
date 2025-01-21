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
      lg: '1.22rem',
      xl: '1.35rem',
      '2xl': '1.663rem',
      '3xl': '2.053rem',
      '4xl': '2.541rem',
      '5xl': '3.152rem',
    },
    extend: {
      colors: {
        'dbm-db':  {
          //100 is main colour
          100: '#101827',
          200: '#1C273C',
          300: '#2B3952',
          400: '#3D4C67',
          500: '#51607D'
        },
        'dbm-lb': {
          // 300 is main colour
          100: '#abe0ec',
          200: '#57c1da',
          300: '#258EA6', 
          400: '#124753'
        },
        'dbm-gr': {
          // 300 is main colour
          100: '#5E5A3F',
          200: '#6A6547',
          300: '#75704E',
          400: '#837E5C',
          500: '#918C6B'
        },
        'dbm-w': {
          // 100 is main colour
          100: '#E5E7EB',
          200: '#CDCFD3',
          300: '#B6B8BC',
          400: '#9FA1A4',        
        },
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