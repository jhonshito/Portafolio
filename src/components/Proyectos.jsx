
import React, { useEffect, useState } from 'react'
import proOne from "../img/active-states-basket-filled.jpg"
import proTwo from "../img/desktop-design-home-dark.jpg"
import proThree from "../img/active-states-dark.jpg"
import proFour from "../img/desktop-design.jpg"
import proFive from "../img/anime-trailer.png"
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const Proyectos = () => {

    const [todo, setTodo] = useState('bg-cyan-400 text-white');
    const [apis, setApis] = useState('');
    const [web, setWeb] = useState('');

    const [filtro, setFiltro] = useState()
    const handleTodo = () => {
        setTodo('bg-cyan-400 text-white')
        setApis('')
        setWeb('')
        setFiltro(objecto.todos)
    }

    const handleApis = () => {
        setTodo('');
        setApis('bg-cyan-400 text-white')
        setWeb('')
        setFiltro(objecto.apis)
    }

    const handleWeb = () => {
        setWeb('bg-cyan-400 text-white')
        setTodo('')
        setApis('')
        setFiltro(objecto.web)
    }


    const [objecto, setObjecto] = useState({
        todos : {
            img : [proOne, proTwo, proThree, proFour, proFive],
            name : ['E-commerce', 'Country-Api', 'Todo-list', 'Diseño-de-formulario', 'Anime-Trailer'],
            colorFondo : ['bg-gradient-to-r from-orange-primary to-piel', 'bg-gradient-to-r from-country to-newCountry', 'bg-gradient-to-r from-colorTodo to-colorNewTodo', 'bg-gradient-to-r from-form to-form', 'bg-gradient-to-r from-black to-black'],
            sombraColor : ['shadow-piel', 'shadow-newCountry', 'shadow-colorNewTodo', 'shadow-form', 'shadow-azul'],
            sitio : ['https://e-commerce-jhon.netlify.app', 'https://country-apis-jhon.netlify.app', 'https://todo-app-jhon.netlify.app', 'https://formulario-jhon.netlify.app', 'https://anime-trailer.netlify.app/'],
            repositorio : ['https://github.com/jhonshito/New-ecommer-with-react-and-vite', 'https://github.com/jhonshito/country-api', 'https://github.com/jhonshito/frontEnd-todo-mentor', 'https://github.com/jhonshito/Dise-o-de-formulario', 'https://github.com/jhonshito/anime-api'],
            tecnologiaOne : ['React - Tailwind', 'Reac - CSS3', 'React - CSS3', 'HTML5 - JavaScript - CSS3', 'React - Tailwind'],
        },
        apis : {
            img : [proTwo, proFive],
            name : ['Country-Api', 'Anime-Trailer'],
            colorFondo : ['bg-gradient-to-r from-country to-newCountry', 'bg-gradient-to-r from-black to-black'],
            sombraColor : ['shadow-newCountry', 'shadow-azul'],
            sitio : ['https://country-apis-jhon.netlify.app', 'https://anime-trailer.netlify.app/'],
            repositorio : ['https://github.com/jhonshito/country-api', 'https://github.com/jhonshito/anime-api'],
            tecnologiaOne : ['React - CSS3', 'React - Tailwind'],
        },
        web : {
            img : [proOne, proThree, proFour],
            name : ['E-commerce', 'Todo-list', 'Diseño-de-formulario'],
            colorFondo : ['bg-gradient-to-r from-orange-primary to-piel', 'bg-gradient-to-r from-colorTodo to-colorNewTodo', 'bg-gradient-to-r from-form to-form'],
            sombraColor : ['shadow-piel', 'shadow-colorNewTodo', 'shadow-form'],
            sitio : ['https://e-commerce-jhon.netlify.app', 'https://todo-app-jhon.netlify.app', 'https://formulario-jhon.netlify.app'],
            repositorio : ['https://github.com/jhonshito/New-ecommer-with-react-and-vite', 'https://github.com/jhonshito/frontEnd-todo-mentor', 'https://github.com/jhonshito/Dise-o-de-formulario'],
            tecnologiaOne : ['React - Tailwind', 'React - CSS3', 'JavaScript - CSS3'],
        }
    })


  return (
    <section id='proyectos' className='mb-8 animate__animated animate__fadeInUp pt-32'>
        <h2 className='text-center text-4xl font-bold text-dark uppercase dark:text-white'>Mis proyectos</h2>
        <p className='w-40 border-2 bg-moradito border-moradito mx-auto my-6'></p>
        <div className='w-1/2 mx-auto flex gap-4 justify-center max-sm:w-full md:w-full'>
            <button onClick={handleTodo} className={`w-24 p-y-1 font-bold text-lg ml-5 rounded-2xl ${todo} dark:text-white`}>
                Todos
            </button>
            <button onClick={handleApis} className={`w-24 py-1 font-bold text-lg rounded-2xl ${apis} dark:text-white`}>
                Apis
            </button>
            <button onClick={handleWeb} className={`w-32 py-1 font-bold text-lg rounded-2xl ${web} mr-5 dark:text-white`}>
                Diseño web
            </button>
        </div>

            <article className='block lg:flex lg:gap-x-16 lg:flex-wrap lg:justify-center'>

                {
                    filtro == undefined ? setFiltro(objecto.todos) :
                    filtro.img.map((item, index) => (
                        
                        <div key={index} className={`w-80  lg:w-96 border-2 lg:border-0 mx-auto lg:mx-0 h-[12rem] rounded-2xl bg-opacity-100 relative mb-72 mt-10 lg:mb-6 ${filtro.colorFondo[index]}`}>
                        <div className='w-80 lg:w-96'>
                            <img className={`h-[10rem] mt-4 w-[300px] mx-auto shadow-2xl ${filtro.sombraColor[index]}`} src={item} alt="Esta es la imagen del proyecto uno" />
                        </div>
                        <div className='lg:bg-transparent mt-10 lg:mt-0 lg:hover:bg-transparente group w-80 rounded-none lg:w-96 h-[12rem] lg:rounded-2xl static lg:absolute  hover:border-transparente peer top-0 hover:backdrop-opacity-0 shadow-none lg:shadow-2xl hover:animate__animated hover:animate__fadeInUp'>
                            <div className='block lg:hidden group-hover:block animate__animated animate__zoomIn mt-16 lg:mt-0'>
                                <h4 className='text-center text-2xl font-bold text-dark mt-4 dark:text-white lg:dark:text-dark'>{filtro.name[index]}</h4>
                                <p className='w-12 mt-2 border-[1px] border-dark mx-auto'></p>
                                <div className='flex justify-center gap-2 text-lg font-medium animate__animated animate__zoomIn mt-4 lg:mt-3'>
                                    <span className='dark:text-white text-center lg:dark:text-dark'>{filtro.tecnologiaOne[index]}</span>
                                </div>
                                <div className='flex justify-center gap-2 animate__animated animate__zoomIn mt-6 lg:mt-4'>
                                    <a href={filtro.sitio[index]} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                        <BsBoxArrowUpRight />
                                        Ver Pagina
                                    </a>
                                    <a href={filtro.repositorio[index]} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                        <BsGithub />
                                        Ver Codigo
                                    </a>
                                </div>
                                <p className='w-40 border-2 border-dark mx-auto mt-6 lg:w-0 lg:border-none'></p>
                            </div>
                        </div>
                    </div>

                    ))
                }
               

            </article>

                {/* <p className='mb-20 mt-6 text-center text-lg font-bold dark:text-white'>mañana estaran disponible mas contenido</p> */}
    </section>
  )
}
export default Proyectos
