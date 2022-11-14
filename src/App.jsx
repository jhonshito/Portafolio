
import React from 'react'
import Descripcion from './components/Descripcion'
import Habilidades from './components/Habilidades'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container mx-auto'>
        <Navbar />
        <Inicio />
        <Descripcion />
        <Habilidades />
    </div>
  )
}

export default App