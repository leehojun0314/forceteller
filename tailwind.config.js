/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 211, 110)",
        disabled: "rgb(232, 232, 232)",
        disabledText: "rgba(0, 0, 0, 0.26)",
        background: "rgb(252, 251, 249)",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
