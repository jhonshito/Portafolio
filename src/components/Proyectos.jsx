
import React, { useState } from 'react'
import proOne from "../img/active-states-basket-filled.jpg"
import proTwo from "../img/desktop-design-home-dark.jpg"
import proThree from "../img/active-states-dark.jpg"
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const Proyectos = () => {

    const [todo, setTodo] = useState('bg-cyan-400 text-white');
    const [apis, setApis] = useState('');
    const [web, setWeb] = useState('');
    const handleTodo = () => {
        setTodo('bg-cyan-400 text-white')
        setApis('')
        setWeb('')
    }

    const handleApis = () => {
        setTodo('');
        setApis('bg-cyan-400 text-white')
        setWeb('')
    }

    const handleWeb = () => {
        setWeb('bg-cyan-400 text-white')
        setTodo('')
        setApis('')
    }

    // seccion de proyectos

    // estos son los nombres de los proyectos
    const proyectosNombre = ['E-commerce', 'Country-Api', 'Todo-list']

    // imagenes de los proyectos
    const proyectos = [proOne, proTwo, proThree];

    // estos son los fondos de los proyectos
    const proyectosColores = ['bg-gradient-to-r from-orange-primary to-piel', 'bg-gradient-to-r from-country to-newCountry', 'bg-gradient-to-r from-colorTodo to-colorNewTodo'];

    // estos son las sombras de los proyectos
    const proyectosShadow = ['shadow-piel', 'shadow-newCountry', 'shadow-colorNewTodo'];

    // estos son los link de los sitios web de los proyectos
    const proyectosSitioWeb = ['https://e-commerce-jhon.netlify.app', 'https://country-apis-jhon.netlify.app', 'https://todo-app-jhon.netlify.app'];

    // estos son los link de los repositorios de los proyectos
    const proyectosCodigo = ['https://github.com/jhonshito/New-ecommer-with-react-and-vite', 'https://github.com/jhonshito/country-api', 'https://github.com/jhonshito/frontEnd-todo-mentor'];

    // estos son las tecnologias que use en los proyectos
    const proyectosTecnologiasOne = ['React', 'React', 'React']
    const proyectosTecnologiasTwo = ['Taikwind', 'CSS3', 'CSS3']


  return (
    <section className='mb-8 animate__animated animate__fadeInUp pt-20'>
        <h2 className='text-center text-4xl font-bold text-dark uppercase'>Mis proyectos</h2>
        <p className='w-40 border-2 bg-moradito border-moradito mx-auto my-6'></p>
        <div className='w-1/2 mx-auto flex gap-4 justify-center max-sm:w-full md:w-full'>
            <button onClick={handleTodo} className={`w-24 p-y-1 font-bold text-lg ml-5 rounded-2xl ${todo}`}>
                Todos
            </button>
            <button onClick={handleApis} className={`w-24 py-1 font-bold text-lg rounded-2xl ${apis}`}>
                Apis
            </button>
            <button onClick={handleWeb} className={`w-32 py-1 font-bold text-lg rounded-2xl ${web} mr-5`}>
                Diseño web
            </button>
        </div>

            <article className='block lg:flex lg:gap-x-16 lg:flex-wrap lg:justify-center'>

                {
                    proyectos.map((item, index) => (

                        <div id='proyectos' className={`w-80  lg:w-96 border-2 mx-auto lg:mx-0 h-[12rem] rounded-2xl bg-opacity-100 relative mb-72 mt-10 lg:mb-6 ${proyectosColores[index]}`}>
                        <div className='w-80 lg:w-96'>
                            <img className={`h-[10rem] mt-4 w-[300px] mx-auto shadow-2xl ${proyectosShadow[index]}`} src={item} alt="Esta es la imagen del proyecto uno" />
                        </div>
                        <div className='lg:bg-transparent mt-10 lg:mt-0 lg:hover:bg-transparente group w-80 rounded-none lg:w-96 h-[12rem] lg:rounded-2xl static lg:absolute  hover:border-transparente peer top-0 hover:backdrop-opacity-0 shadow-none lg:shadow-2xl hover:animate__animated hover:animate__fadeInUp'>
                            <div className='block lg:hidden group-hover:block animate__animated animate__jackInTheBox mt-16 lg:mt-0'>
                                <h4 className='text-center text-2xl font-bold text-dark mt-4'>{proyectosNombre[index]}</h4>
                                <p className='w-12 mt-2 border-[1px] border-dark mx-auto'></p>
                                <div className='flex justify-center gap-2 text-lg font-medium animate__animated animate__jackInTheBox mt-4 lg:mt-3'>
                                    <span>{proyectosTecnologiasOne[index]}</span>
                                    <span>-</span>
                                    <span>{proyectosTecnologiasTwo[index]}</span>
                                </div>
                                <div className='flex justify-center gap-2 animate__animated animate__jackInTheBox mt-6 lg:mt-4'>
                                    <a href={proyectosSitioWeb[index]} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                        <BsBoxArrowUpRight />
                                        Ver Pagina
                                    </a>
                                    <a href={proyectosCodigo[index]} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
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

                <p className='mb-20 mt-6 text-center text-lg font-bold'>mañana estaran disponible mas contenido</p>
    </section>
  )
}
export default Proyectos
