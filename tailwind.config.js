const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
      container: {
        center:true,
        padding: "15px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
    
    extend: {
      colors: {
       primary: "#1c1c22",
       accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
       },
      },
      keyframes:{
       "accordion-down":{
        from: { height: "0"},
        to: {height: "var(--radix-accordion-content-height)"},
       },
       "accordion-up": {
         from:{height: "var(--radix-accordion-content-height)"},
         to: {height: "0"},
       }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    
    },
  },
  plugins: [require("tailwindcss-animate")],
};
