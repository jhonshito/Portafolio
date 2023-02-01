import Proyectos from "./Proyectos"

import proOne from "../img/active-states-basket-filled.jpg"
import proTwo from "../img/desktop-design-home-dark.jpg"
import proThree from "../img/active-states-dark.jpg"
import proFour from "../img/desktop-design.jpg"
import proFive from "../img/anime-trailer.png"
import proSix from "../img/desktop-design-completed.jpg"
import proSeven from "../img/freetomage-api.png"
import proEight from "../img/portafolio-jhon.png";
import proNine from "../img/viajes.png"
import { useState } from "react"

const DataProyectos = () => {

    const [objecto, setObjecto] = useState([
        {
            type : 'api', 
            img : proTwo,
            name : 'Country-Api',
            colorFondo : 'bg-gradient-to-r from-country to-newCountry',
            sombraColor : 'shadow-newCountry',
            sitio : 'https://country-apis-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/country-api',
            tecnologiaOne : 'React - CSS3',
            border : 'border-country'
        },

        {
            type : 'web', 
            img : proOne,
            name : 'E-commerce',
            colorFondo : 'bg-gradient-to-r from-orange-primary to-piel',
            sombraColor : 'shadow-piel',
            sitio : 'https://e-commerce-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/New-ecommer-with-react-and-vite',
            tecnologiaOne : 'React - Tailwind',
            border : 'border-piel'
        },

        {
            type : 'web', 
            img : proThree,
            name : 'Todo-list',
            colorFondo : 'bg-gradient-to-r from-colorTodo to-colorNewTodo',
            sombraColor : 'shadow-colorNewTodo',
            sitio : 'https://todo-app-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/frontEnd-todo-mentor',
            tecnologiaOne : 'React - CSS3',
            border : 'border-colorNewTodo'
        },

        {
            type : 'web', 
            img : proFour,
            name : 'Diseño-de-formulario',
            colorFondo : 'bg-gradient-to-r from-form to-form',
            sombraColor : 'shadow-form',
            sitio : 'https://formulario-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/Dise-o-de-formulario',
            tecnologiaOne : 'HTML5 - JavaScript - CSS3',
            border : 'border-form'
        },

        {
            type : 'api', 
            img : proFive,
            name : 'Anime-Trailer',
            colorFondo : 'bg-gradient-to-r from-black to-black',
            sombraColor : 'shadow-azul',
            sitio : 'https://anime-trailer.netlify.app/',
            repositorio : 'https://github.com/jhonshito/anime-api',
            tecnologiaOne : 'React - Tailwind',
            border : 'border-black'
        },

        {
            type : 'web', 
            img : proSix,
            name : 'Tip-descuentos',
            colorFondo : 'bg-gradient-to-r from-darkNuevo to-nuevo',
            sombraColor : 'shadow-nuevo',
            sitio : 'https://descuentos-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/app-de-descuentos',
            tecnologiaOne : 'HTML5 - CSS3 - JavaScript',
            border : 'border-darkNuevo'
        },

        {
            type : 'api', 
            img : proSeven,
            name : 'Freetogame-api',
            colorFondo : 'bg-gradient-to-r from-black to-cyan-700',
            sombraColor : 'shadow-cyan-700',
            sitio : 'https://free-api-12.netlify.app',
            repositorio : 'https://github.com/jhonshito/next-freetogame-api',
            tecnologiaOne : 'Tailwind - React - Next.js',
            border : 'border-cyan-700'
        },

        {
            type : 'web', 
            img : proEight,
            name : 'Portafolio',
            colorFondo : 'bg-gradient-to-r from-dark to-transparente',
            sombraColor : 'shadow-transparente',
            sitio : 'https://portafolio-de-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/Portafolio',
            tecnologiaOne : 'Tailwind - Vite.js - React',
            border : 'border-dark'
        },

        {
            type: 'web',
            img : proNine,
            name : 'Web Viajes',
            colorFondo : 'bg-gradient-to-r from-via to-dark',
            sombraColor : 'shadow-transparente',
            sitio : 'https://viajes-jhon.netlify.app',
            repositorio : 'https://github.com/jhonshito/pruaba-frontend-02',
            tecnologiaOne : 'HTML5 - CSS3 - JavaScript - Glider.js - Google-Analitycs',
            border : 'border-via'
        }
    ])


  return (
    <>
        <Proyectos objecto={objecto} />
    </>
  )
}

export default DataProyectos
