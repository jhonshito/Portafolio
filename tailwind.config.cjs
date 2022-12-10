/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Kumbh Sans': 'Kumbh Sans',
        'Old' : 'Old Standard',
        'Rubik' : 'Rubik Gemstones',
        'Shi' : 'Esteban'
      },
      colors: {
        "moradito" : "#7F47EF",
        "dark" : "#00051de8",
        "azulito" : "#D9EDF7",
        "azul" : "#3A87AD",
        "neo" : "#1f53c5",
        "nuevoNeo" : "#24303c",
        "opacidad" : "#E1E6E8",
        "piel" : "#E6C089",
        "orange-primary" : "#D66515",
        "transparente" : "rgba(227, 232, 234, .75)",
        "country" : "#202C37",
        "newCountry" : "#2B3945",
        "colorTodo" : "#3D1E9B",
        "colorNewTodo" : "#6A1A7D",
        "form" : "#FF7A7A",
        "nuevo" : "#C5E4E7",
        "darkNuevo" : "#00494D"
      }
    },
  },
  plugins: [],
}
