
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Glider from 'react-glider';
// import 'glider-js/glider.min.css';

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

  useEffect(() => {
    new Glider(document.querySelector('.lista'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '.indicadores',
      arrows: {
        prev: '.anterior',
        next: '.siguiente'
      },

      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 400,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
    })
  },[])

  console.log(img)
  return (
    <div className='relative bg-white w-[80%] mx-auto'>      
            <div className='lista w-full truncate bg-black pt-40'>
              {
                img.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt={`Esta es la imagen de mi certificado numero ${index}`} />
                  </div>
                ))
              }
            </div>
            <div className='absolute top-[60%] w-full z-10 flex justify-between items-center'>
              <button aria-label='Anterior' className='anterior -ml-7'>
              <FaChevronLeft/>
              </button>
              <button aria-label='Siguiente' className='siguiente right-0 -mr-7'>
                <FaChevronRight/>
              </button>
            </div>

      <div role='tablist' className='indicadores rounded-none'></div>
        <Link to='/'>Ir al Inicio</Link>
    </div>
  )
}

export default Estudios