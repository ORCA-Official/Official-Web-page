/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        kumar: ['"Kumar One"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
