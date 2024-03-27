/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'light-red': 'rgba(245, 71, 72, 1)',
        'custom-black': 'rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}