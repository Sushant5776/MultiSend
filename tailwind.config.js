/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#6366f1",
        rare: "#272331",
      },
      fontFamily: {
        poppins: [ "Poppins", ...defaultTheme.fontFamily.sans ],
      },
    },
  },
  plugins: [ require('tw-elements/dist/plugin') ],
}
