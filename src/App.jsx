
import React, { useEffect } from 'react'
import Descripcion from './components/Descripcion'
import Habilidades from './components/Habilidades'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'
import Proyectos from './components/Proyectos'

// import Swal from 'sweetalert2'

const App = () => {

  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "Información inportante",
      text: "Hola querido ❤ visitante. me gustaria informarte que el propietario de este sitio web actualmente se encuentra trabajando en el si te gustaria ver lo que lleva  dale OK"
    })
  },[])
  return (
    <div className='container mx-auto'>
        <Navbar />
        <Inicio />
        <Descripcion />
        <Habilidades />
        <Proyectos />
    </div>
  )
}

export default App