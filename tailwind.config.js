/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary_color":"#5932EA",
        'royal_purple': '#5138EE',
        'ice_purple':'#EDE8FF',
        'icon_gray': '#D2D3D5',
        'back_gray': '#F9F9F9',
        'second_royal_blue': '#5272E9',
        'light_green':'#8CDED7',
        'index_gray' : '#F4F4F4'
      }
    },
  },
  plugins: [],
}