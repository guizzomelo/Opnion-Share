/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jua': ['Jua', 'sans-serif'],
      'londrina' : ['Londrina Shadow', 'cursive']
    },
    colors: {
      'D9D9D9': '#D9D9D9',
      '0A2F67' : '#0A2F67',
      'white' : '#FFFFFF',
      'gray' : '#D3D3D3',
      'black': '#000000',
      'gray-50': 'gray-50'

    },
  plugins: [],
  
}
}
