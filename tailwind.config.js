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
        grayExtraLight: 'hsl(0,0,80)',
        grayLight: 'hsl(0,0,40)'
      },
      boxShadow: {
        'card': '0 0 30px 2px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}