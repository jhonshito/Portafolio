
import React, { useState } from 'react'

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
    </section>
  )
}

export default Proyectos
