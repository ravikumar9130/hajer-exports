/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6461C1",
        secondary: "#0B0B0C",
        blue: "#6F6BE5",
        dark: "#000103",
        white: "#ffffff",
        gray: "#ffffff95",
      },
      fontSize: {
        xs: ".75rem" /* 12px */,
        sm: "0.8125rem" /* 14px */,
        base: "1rem" /* 16px */,
        lg: "1.125rem" /* 18px */,
        xl: "1.25rem" /* 20px */,
      },
      fontFamily: {
        brand: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
    },
  },
  plugins: [],
};
