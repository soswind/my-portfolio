/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        sandbeige: "#D2B48C",
        terracotta: "#E07A5F",
        deepbrown: "#8D6E63",
        olivegreen: "#A4A947",
        darkchoco: "#5D4037",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
      },
    },
  },
  plugins: [],
};
