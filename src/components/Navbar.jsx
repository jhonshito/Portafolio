import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import DescargaCv from "./DescargaCv";

const Navbar = () => {

  const [ocultar, setOcultar] = useState('hidden');
  const [sobreMi, setSobreMi] = useState('')

  const handleOpen = () => {
    setOcultar('');
  };

  const handleOcultar = () => {
    setOcultar('hidden');
  };

  const handleSobreMi = (dato) => {

    switch(dato){
      case '#inicio':
        setSobreMi(dato)
      break;

      case '#descripcion':
        setSobreMi(dato)
      break;

      case '#habilidades':
        setSobreMi(dato)
      break;

      case '#proyectos':
        setSobreMi(dato)
      break;
    }
    setOcultar('hidden')
  }

    const corcheteOne = '<'
    const corcheteTwo = '/>'
  return (
    <header className='flex items-center mt-6 justify-between mb-40'>
      <div className='flex ml-2 sm:ml-5 md:ml-8 lg:ml-16'>
        <h1 className='text-2xl text-moradito font-bold'>{corcheteOne}Jhon</h1>
        <span className='text-black text-2xl font-bold'>sito</span>
        <span className='text-moradito text-2xl font-bold'>{corcheteTwo}</span>
      </div>

      <nav className={`flex flex-col font-bold bg-dark text-white absolute top-0 right-0 w-full h-full text-3xl text-center gap-y-6 sm:w-80 md:w-1/2 md:text-xl lg:w-96 ${ocultar}`}>
        <button className="w-12 mx-auto mt-40 h-12 bg-moradito rounded-3xl" onClick={handleOcultar}>
          <AiOutlineClose className="mx-auto text-2xl" />
        </button>
        <a onClick={() => handleSobreMi('#inicio')} className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito" href={sobreMi}>Inicio</a>
        <a onClick={() => handleSobreMi('#descripcion')} href={sobreMi} className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito">
          Sobre mi
        </a>
        {/* <a className=" transition-all duration-300 hover:text-moradito" href=""></a> */}
        <a onClick={() => handleSobreMi('#habilidades')} className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito"  href={sobreMi}>Habilidades</a>
        <a onClick={() => handleSobreMi('#proyectos')} className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito"  href={sobreMi}>Proyectos</a>
        <DescargaCv />
      </nav>

      <div className="mr-2 sm:mr-5 md:mr-8 lg:mr-16">
        <button onClick={handleOpen} className="w-10 h-10 bg-moradito rounded-3xl">
          <AiOutlineMenu className="mx-auto text-lg text-white" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
