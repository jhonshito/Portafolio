
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Estudios = ({ img }) => {

  const [ocultar, setOcultar] = useState('hidden');

  const handleOpen = () => {
    setOcultar('')
  }

  console.log(img)
  return (
    <section className='mt-28'>
      <div className='flex flex-wrap relative items-center justify-center gap-6 w-full'>
        {
          img.map((item, index) => (
            
            <button onClick={handleOpen}>
              <img key={index} className='w-80' src={item} alt={`Esta es la imagen de mi certificado numero ${index}`} />
            </button>
            ))
        }

      </div>
        <div className={`w-[80%] absolute top-[16%] z-10 translate-x-32 h-[80vh] py-6 bg-dark ${ocultar}`}></div>
        <Link to='/'>Ir al Inicio</Link>
    </section>
  )
}

export default Estudios