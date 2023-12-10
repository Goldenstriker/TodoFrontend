/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'persian-blue': '#012A4A',
        'dutch-white': '#e8dab2ff',
        'sky-blue': '#89C2D9',
        'light-blue': '#A9D6E5',
        'ulcl-blue': '#2A6F97',
        glassmorphism: "rgba(16, 16, 18, 0.60)"
      }

    },
  },
  plugins: [],
}

