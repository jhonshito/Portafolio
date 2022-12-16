
import React from 'react'
import { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
          breakpoint: 500,
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
            slidesToShow: 3,
            slidesToScroll: 3,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
    })
  },[])

  console.log(img)
  return (
    <div className='relative w-[80%] mx-auto mt-20'>
      <h2 className='text-center mb-6 text-5xl font-bold dark:text-white mr-4 text-dark font-Rubik tracking-wide'>Certificados</h2>
      <p className='text-center mx-2 text-xl dark:text-white text-dark mb-6 font-Old'>En esta sección encontraras los certificados 👩🏾‍💻⬇ que he obtenido durante todo mi proceso😍😘 de formación ❤</p>  
            <div className='lista w-full truncate'>
              {
                img.map((item, index) => (
                  <div key={index}>
                    <img className='pl-2' src={item} alt={`Esta es la imagen de mi certificado numero ${index}`} />
                  </div>
                ))
              }
            </div>
            <div className='absolute top-[60%] md:top-[60%] lg:top-[60%] w-full z-10 flex justify-between items-center'>
              <button aria-label='Anterior' className='anterior -ml-7 dark:hover:text-white hover:text-dark text-2xl dark:text-transparente'>
              <FaChevronLeft/>
              </button>
              <button aria-label='Siguiente' className='siguiente right-0 -mr-7 dark:hover:text-white hover:text-dark text-2xl dark:text-transparente'>
                <FaChevronRight/>
              </button>
            </div>

      <div role='tablist' className='indicadores rounded-none dark:text-white'></div>
    </div>
  )
}

export default Estudios