/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      columns:{
        'xs' :'2rem',
      }
    },
  },
  plugins: [],
}