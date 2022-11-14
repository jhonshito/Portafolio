
import React from 'react'
import Descripcion from './components/Descripcion'
import Habilidades from './components/Habilidades'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'
import Proyectos from './components/Proyectos'

const App = () => {
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