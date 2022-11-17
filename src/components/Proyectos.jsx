
import React, { useState } from 'react'
import proOne from "../img/active-states-basket-filled.jpg"
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const Proyectos = () => {

    const [todo, setTodo] = useState('');
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
  return (
    <section className='mb-8 animate__animated animate__fadeInUp'>
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

            <article>
                <div id='proyectos' className='w-80 lg:w-96 border-2 mx-auto lg:mx-0 h-[12rem] rounded-2xl bg-gradient-to-r from-orange-primary to-piel bg-opacity-100 relative mt-10 mb-6'>
                    <div className='w-80 lg:w-96'>
                        <img className='h-[10rem] mt-4 w-[300px] mx-auto shadow-2xl shadow-piel' src={proOne} alt="Esta es la imagen del proyecto uno" />
                    </div>
                    <div className='lg:bg-transparent mt-10 lg:mt-0 lg:hover:bg-transparente group w-80 rounded-none lg:w-96 h-[12rem] lg:rounded-2xl static lg:absolute  hover:border-transparente peer top-0 hover:backdrop-opacity-0 shadow-none lg:shadow-2xl hover:animate__animated hover:animate__fadeInUp'>
                        <div className='block lg:hidden group-hover:block animate__animated animate__jackInTheBox mt-16 lg:mt-0'>
                            <h4 className='text-center text-2xl font-bold text-dark mt-4'>E-commerce</h4>
                            <p className='w-12 mt-2 border-[1px] border-dark mx-auto'></p>
                            <div className='flex justify-center gap-2 text-lg font-medium animate__animated animate__jackInTheBox mt-4 lg:mt-3'>
                                <span>React</span>
                                <span>-</span>
                                <span>Taikwind</span>
                            </div>
                            <div className='flex justify-center gap-2 animate__animated animate__jackInTheBox mt-6 lg:mt-4'>
                                <a href='https://e-commerce-jhon.netlify.app' target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                    <BsBoxArrowUpRight />
                                    Ver Pagina
                                </a>
                                <a href='https://github.com/jhonshito/New-ecommer-with-react-and-vite' target='_blank' className='lg:border-[2px] rounded-lg lg:border-dark w-32 justify-center flex hover:bg-dark hover:text-white py-1 items-center gap-2 font-semibold bg-dark lg:bg-transparent text-white lg:text-dark border-[0px]'>
                                    <BsGithub />
                                    Ver Codigo
                                </a>
                            </div>
                            <p className='w-40 border-2 border-dark mx-auto mt-6 lg:w-0 lg:border-none'></p>
                        </div>
                    </div>
                </div>
            </article>
    </section>
  )
}
export default Proyectos
