
import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";

const DescargaCv = () => {
    
  return (
    <div className='w-full mx-auto mb-14 z-10'>
      <a className='border-2 flex border-moradito w-44 mx-auto justify-center items-center gap-2 py-1 bg-moradito text-white font-bold text-lg rounded-xl text-center' href="/Cv-jhon.pdf" download={''}>Descargar Cv
        <AiOutlineDownload className='text-2xl' />
      </a>
    </div>
  )
}

export default DescargaCv
