/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "san-serif"],
        general: ["general", "san-seriff"],
        "circular-web": ["circular-web", "san-serif"],
        "robert-medium": ["robert-medium", "san-seriff"],
        "robert-regular": ["robert-regular", "san-serif"],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E983F",
          300: "#EDFF66",
        },
      },
      screens: {
        xxs: "360px", // Now you can use xs: as your prefix
        "max-400": { max: "400px" }, // applies to screen width ≤ 300px
        "max-sm": { max: "800px" },
      },
    },
  },
  plugins: [],
};
