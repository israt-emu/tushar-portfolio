const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        title: "var(--title-color)",
        small_text: "var(--small-text-color)",
        small_bg: "var(--small-bg-color)",
        reddis: "var(--reddish-color)",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
