/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '15px',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    colors: {
      'moshop-color': '#069255', // green: background, background-button
      'common-green': '#28a745', // border and text-button
      'common-yellow': '#ffc107',
      'common-red': '#dc3545',
      'common-black': '#212529',
      'common-disable': '#efefef',
      'black': "#000000",
      "white": "#FFFFFF",
      'red': '#da4838',
      'grey': '#808080',
      'borderColor-tbl': '#dee2e6'
    },
  },
  plugins: [],
}