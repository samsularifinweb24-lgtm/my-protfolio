/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(-25px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: 0, transform: "translateX(25px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        slideRight: "slideRight 1s ease-out",
        slideLeft: "slideLeft 1s ease-out",
        fadeIn: "fadeIn 1.5s ease-in",
        spinSlow: "spinSlow 8s linear infinite",
      },
    },
  },
  plugins: [],
};




