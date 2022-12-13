
import React, { useEffect, useState } from 'react'
import Descripcion from './components/Descripcion'
import Habilidades from './components/Habilidades'
import Inicio from './components/Inicio'
// import Navbar from './components/Navbar'
import { GiEvilMoon } from "react-icons/gi";

import Swal from 'sweetalert2'
import DataProyectos from './components/DataProyectos'
import Contacto from './components/Contacto'

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
        {/* <Navbar /> */}
        <Inicio />
        <Descripcion />
        <Habilidades />
        <DataProyectos />
        <Contacto />
        <button onClick={handleDark} className='w-16 z-50 h-16 grid justify-center md:bg-moradito fixed bottom-64 right-0 mb-5 mr-2 rounded-full'>
          <GiEvilMoon className='mt-2 text-5xl' />
        </button>
    </div>
  )
}

export default App