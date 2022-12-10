
import React, { useEffect, useState } from 'react'
import Descripcion from './components/Descripcion'
import Habilidades from './components/Habilidades'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'
import Proyectos from './components/Proyectos'
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { GiEvilMoon } from "react-icons/gi";

import Swal from 'sweetalert2'

const App = () => {

  // useEffect(() => {
  //   Swal.fire({
  //     icon: "info",
  //     title: "Información importante",
  //     text: "Hola querido ❤ visitante. me gustaria informarte que el propietario de este sitio web actualmente se encuentra trabajando en el si te gustaria ver lo que lleva  dale OK"
  //   })
  // },[])

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')

  const handleDark = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='dark:bg-dark font-Shi'>
        <Navbar />
        <Inicio />
        <Descripcion />
        <Habilidades />
        <Proyectos />

        <footer className='bg-dark lg:h-64 h-80 relative mt-40'>
          <h2 className='text-white text-5xl pt-10 font-bold text-center font-Rubik'>Formas de Contactarme</h2>
          <div className='flex justify-center mt-8 items-center gap-4 text-5xl'>
          <a className="peer" href="https://www.facebook.com/jhon.caicedo.127/" target='_blank'>
            <FaFacebookSquare className="text-blue-600" />
          </a>
          <a className="peer" href="https://www.instagram.com/deiversonjhon/" target='_blank'>
            <FaInstagramSquare className="text-red-400" />
          </a>
          <a href="mailto:caicedojhon957@gmail.com" target='_blank'>
            <MdOutgoingMail className='text-white text-6xl' />
          </a>
          <a href="https://api.whatsapp.com/send?phone=573172771913" target='_blank'>
            <FaWhatsapp className='text-green-400' />
          </a>
          </div>

          <div className='lg:flex text-white text-lg grid text-center mt-4 lg:justify-evenly'>
            <p className=''>2022 Jhon Caicedo @Creador❤😍👩🏾‍💻😜</p>
            <p>Que viva el desarrollo de software (siiiiiiiiii)😘</p>
          </div>
        </footer>
        <button onClick={handleDark} className='w-16 z-50 h-16 grid justify-center md:bg-moradito fixed bottom-64 right-0 mb-5 mr-2 rounded-full'>
          <GiEvilMoon className='mt-2 text-5xl' />
        </button>
    </div>
  )
}

export default App