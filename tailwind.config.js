/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#188FA7",
        disabled: "#E5E7EB",
        disabledText: "#CBCCCF",
        background: "#E8F0FF",
        customShadow: "1px 1px 20px 2px",
        dark: "#0A014F",
        white: "#FFFEFE",
        blue: "#4099FF",
        yellow: "#FFFD98",
        red: "#FF91B6",
        grey: "#CBCCCF",
      },
      fontFamily: {
        jula: "Jua",
      },
      boxShadow: {
        tableCell: `2px 0 0 0 #FFFEFE, 
    0 2px 0 0 #FFFEFE, 
    2px 2px 0 0 #FFFEFE,
    2px 0 0 0 #FFFEFE inset, 
    0 2px 0 0 #FFFEFE inset;`,
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
