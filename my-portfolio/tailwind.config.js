/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary_color: "#2B3B52",
      secondary_color: "#F9F6EE",

      black: "#000",
      white: "#FFF",
      transparent: "#FF000000"
      
    }
  },
  plugins: [],
}