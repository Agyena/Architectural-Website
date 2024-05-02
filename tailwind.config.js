/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dosis' : ["Dosis", 'sans-serif'],
        'alatsi' : ["Alatsi", 'sans-serif'],
        'oswald' : ["Oswald", 'sans-serif']
      },
    },
  },
  plugins: [],
}