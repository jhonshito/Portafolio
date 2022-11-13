/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Kumbh Sans': 'Kumbh Sans',
    },
    extend: {
      colors: {
        "moradito" : "#7F47EF"
      }
    },
  },
  plugins: [],
}
