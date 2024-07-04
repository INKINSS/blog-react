/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(194,53,12)',
        grayLight: 'hsl(0,0,40)'
      }
    },
  },
  plugins: [],
}