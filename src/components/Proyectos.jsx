
import React, { useState } from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import '../styles/proyect.css'

const Proyectos = ({objecto}) => {

    const [todo, setTodo] = useState('bg-moradito text-white');
    const [apis, setApis] = useState('');
    const [web, setWeb] = useState('');

    const [filtro, setFiltro] = useState()
    const handleTodo = () => {
        setTodo('bg-moradito text-white')
        setApis('')
        setWeb('')
        setFiltro(objecto.todos)
    }

    const handleApis = () => {
        setTodo('');
        setApis('bg-moradito text-white')
        setWeb('')
        setFiltro(objecto.filter(proyect => proyect.type === 'api'))
    }

    const handleWeb = () => {
        setWeb('bg-moradito text-white')
        setTodo('')
        setApis('')
        setFiltro(objecto.filter(proyect => proyect.type === 'web'))
    }


  return (
    <section id='proyectos' className='mb-8 animate__animated animate__fadeInUp pt-32 '>
        <h2 className='text-center text-4xl font-bold text-dark uppercase dark:text-white font-Rubik'>Mis proyectos</h2>
        <p className='w-40 border-2 bg-moradito border-moradito mx-auto my-6'></p>
        <div className='w-1/2 mx-auto flex gap-4 justify-center max-sm:w-full md:w-full'>
            <button onClick={handleTodo} className={`w-24 p-y-1 font-bold text-lg ml-5 rounded-xl ${todo} dark:text-white  hover:bg-moradito hover:text-white`}>
                Todos
            </button>
            <button onClick={handleApis} className={`w-24 py-1 font-bold text-lg rounded-xl ${apis} dark:text-white hover:bg-moradito hover:text-white`}>
                Apis
            </button>
            <button onClick={handleWeb} className={`w-32 py-1 font-bold text-lg rounded-xl ${web} mr-5 dark:text-white hover:bg-moradito hover:text-white`}>
                Diseño web
            </button>
        </div>

            <article className='block lg:flex lg:gap-x-16 lg:flex-wrap lg:justify-center'>

                {
                    filtro == undefined ? setFiltro(objecto) :
                    filtro.map((item, index) => (
                        
                        <div key={index} className={`w-80  lg:w-96 border-2 ${item.border} lg:border-0 mx-auto lg:mx-0 h-[12rem] rounded-2xl bg-opacity-100 relative mb-72 mt-10 lg:mb-6 ${item.colorFondo}`}>
                        <div className='w-80 lg:w-96'>
                            <img className={`h-[10rem] mt-4 w-[300px] mx-auto shadow-2xl ${item.sombraColor}`} src={item.img} alt="Esta es la imagen del proyecto uno" />
                        </div>
                        <div className='lg:bg-transparent mt-10 lg:mt-0 lg:hover:bg-transparente group w-80 rounded-none lg:w-96 h-[12rem] lg:rounded-2xl static lg:absolute  hover:border-transparente peer top-0 hover:backdrop-opacity-0 shadow-none lg:shadow-2xl hover:animate__animated hover:animate__fadeInUp'>
                            <div className='block lg:hidden group-hover:block animate__animated animate__zoomIn mt-16 lg:mt-0'>
                                <h4 className='text-center text-2xl font-bold text-dark mt-4 dark:text-white lg:dark:text-dark'>{item.name}</h4>
                                <p className='w-12 mt-2 border-[1px] border-dark mx-auto'></p>
                                <div className='flex justify-center gap-2 text-lg font-medium animate__animated animate__zoomIn mt-4 lg:mt-3'>
                                    <span className='dark:text-white text-center lg:dark:text-dark font-semibold'>{item.tecnologiaOne}</span>
                                </div>
                                <div className='flex justify-center gap-2 animate__animated animate__zoomIn mt-6 lg:mt-4'>
                                    <a href={item.sitio} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                        <BsBoxArrowUpRight />
                                        Ver Pagina
                                    </a>
                                    <a href={item.repositorio} target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
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
