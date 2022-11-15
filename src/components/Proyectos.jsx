
import React, { useState } from 'react'
import proOne from "../img/active-states-basket-filled.jpg"

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
                <div className='w-80 border-2 h-40 rounded-2xl bg-gradient-to-r from-orange-primary to-piel bg-opacity-100 relative'>
                    <div className='w-80'>
                        <img className='h-[120px] mt-4 w-[260px] mx-auto shadow-2xl shadow-orange-primaryo' src={proOne} alt="Esta es la imagen del proyecto uno" />
                    </div>
                    <div className='hover:bg-transparente group w-80 h-40 rounded-2xl absolute  hover:border-transparente peer top-0 hover:backdrop-opacity-0 shadow-2xl hover:animate__animated hover:animate__fadeInUp'>
                        <h4 className='hidden group-hover:block text-center text-2xl font-bold text-dark mt-4'>E-commerce</h4>
                        <p></p>
                    </div>
                </div>
            </article>
    </section>
  )
}

export default Proyectos
