/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
        Lato: ["Lato", 'sans-serif'],
        poppins: ['Poppins", sans-serif'],
        kumar: ['"Kumar One"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
