/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 211, 110)",
        disabled: "rgb(232, 232, 232)",
        disabledText: "rgba(0, 0, 0, 0.26)",
        background: "#fcfbf9",
        customShadow: "1px 1px 20px 2px",
        dark: "rgb(82, 76, 70)",
        brown: "rgb(218, 214, 210)",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
