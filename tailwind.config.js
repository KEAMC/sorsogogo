/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "moredetails.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "lincoln-green": "#195905",
        "dark-green": "#133E04",
        "golden-yellow": "#FFD700",
      },
    },
  },
  plugins: [],
};
