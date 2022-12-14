
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Estudios = ({ img }) => {

  // const [count, setCount] = useState(0)
  // const [animacion, setAnimacion] = useState('')

  // useEffect(() => {
  //   setTimeout(function(){
  //     setAnimacion('animate__animated animate__fadeOutLeft')
  //   },5000)

  //   setTimeout(function(){
  //     setAnimacion('animate__animated animate__slideInRight')
  //     setCount(count + 1)
  //     if(count > 8){
  //       setCount(0)
  //     }
  //   },6000)
  // },[count])

  console.log(img)
  return (
    <section className={`mt-28`}>
      <h2 className='text-center text-5xl font-extrabold mx-4 mb-3 font-Old'>En este haria encontraras certificados de cursos que he hecho durante mi proceso de formación </h2>
      <div className='flex flex-wrap w-[90%] md:mt-6 mx-auto items-center justify-center gap-3'>
        {
          img.map((item, index) => (
            
            <button>
              <img key={index} className='w-96' src={item} alt={`Esta es la imagen de mi certificado numero ${index}`} />
            </button>
            ))
        }

      </div>
        <Link to='/'>Ir al Inicio</Link>
    </section>
  )
}

export default Estudios