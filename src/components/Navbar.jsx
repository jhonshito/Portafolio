import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import DescargaCv from "./DescargaCv";

const Navbar = () => {

  const [ocultar, setOcultar] = useState('hidden');

  const handleOpen = () => {
    setOcultar('');
  };

  const handleOcultar = () => {
    setOcultar('hidden');
  };

    const corcheteOne = '<'
    const corcheteTwo = '/>'
  return (
    <header className='flex items-center mt-6 justify-between z-20'>
      <div className='flex ml-2 sm:ml-5 md:ml-8 lg:ml-16'>
        <h1 className='text-2xl text-moradito font-bold'>{corcheteOne}Jhon</h1>
        <span className='text-black text-2xl font-bold'>shito</span>
        <span className='text-moradito text-2xl font-bold'>{corcheteTwo}</span>
      </div>

      <nav className={`flex flex-col font-bold bg-dark text-white absolute top-0 right-0 w-full h-full text-3xl text-center gap-y-6 sm:w-80 md:w-1/2 md:text-xl lg:w-96 ${ocultar}`}>
        <button className="w-12 mx-auto mt-40 h-12 bg-moradito rounded-3xl" onClick={handleOcultar}>
          <AiOutlineClose className="mx-auto text-2xl" />
        </button>
        <a className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito" href="">Inicio</a>
        <a className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito">
          <NavLink to="/descripcion">Sobre mi</NavLink>
        </a>
        {/* <a className=" transition-all duration-300 hover:text-moradito" href=""></a> */}
        <a className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito"  href="">Blog</a>
        <a className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito"  href="">Proyectos</a>
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
