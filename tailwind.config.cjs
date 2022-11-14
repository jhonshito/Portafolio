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
        "moradito" : "#7F47EF",
        "dark" : "#00051de8",
        "azulito" : "#D9EDF7",
        "azul" : "#3A87AD",
        "neo" : "#1f53c5",
        "nuevoNeo" : "#24303c",
        "opacidad" : "#E1E6E8"
      }
    },
  },
  plugins: [],
}
