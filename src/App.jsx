
import React from 'react'
import Inicio from './components/Inicio'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container mx-auto'>
        <Navbar />
        <Inicio />
    </div>
  )
}

export default App