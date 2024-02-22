/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        notblack: "#13293D",
        notwhite: "#E8F1F2",
        softgreen: "#A7C4B5",
        firstblue: "#006494",
        secondblue: "#247BA0"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

