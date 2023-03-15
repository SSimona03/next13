/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['var(--font-montserrat)'],
        asul: ['var(--font-asul)'],
        "poppins": ['Poppins']
      }
    },
    gridTemplateColumns:{
      fluid : "repeat(auto-fit, minmax(15rem, 1fr))"
    }
  }, 
  plugins: [],
}
