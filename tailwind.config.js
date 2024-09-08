/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontSize: {
        base: "18px",
      },
      colors: {
        vuejs: {
          100: "#49e659",
          900: "#396359",
        },
      },
      fontFamily: {
        myFont: ["Protest Guerrilla", "sans-serif"],
      },
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
  },
  plugins: [],
};
