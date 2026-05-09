/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e14",
        indigoAccent: "#4f46e5"
      },
      fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        float: 'orbFloat 4s ease-in-out infinite',
      },
      keyframes: {
        orbFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};


