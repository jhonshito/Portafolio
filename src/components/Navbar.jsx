import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DescargaCv from "./DescargaCv";
import { Outlet } from "react-router-dom";

const Navbar = () => {

  const [ocultar, setOcultar] = useState('hidden');
  const [animacion, setAnimacion] = useState('');
  const [sobreMi, setSobreMi] = useState('');
  const [menuOculto, setMenuOculto] = useState('');
  const body = document.body

  const handleOpen = () => {
    setOcultar('');
    setMenuOculto('hidden')
    setAnimacion('animate__animated animate__fadeInTopRight')
    body.style.overflowY = 'hidden'
  };

  const handleOcultar = () => {
    setTimeout(function(){
      setOcultar('hidden');
    },300)
    setAnimacion('animate__animated animate__fadeOutTopRight')
    setMenuOculto('')
    body.style.overflowY = 'auto'
  };

  const handleSobreMi = (dato) => {

    switch(dato){
      case '#inicio':
        setSobreMi(dato);
        setMenuOculto('');
        body.style.overflowY = 'auto'
      break;

      case '#descripcion':
        setSobreMi(dato);
        setMenuOculto('');
        body.style.overflowY = 'auto'
      break;

      case '#habilidades':
        setSobreMi(dato);
        setMenuOculto('');
        body.style.overflowY = 'auto'
      break;

      case '#proyectos':
        setSobreMi(dato);
        setMenuOculto('');
        body.style.overflowY = 'auto'
      break;

      case '#conctato':
        setSobreMi(dato);
        setMenuOculto('');
        body.style.overflowY = 'auto'
      break;
    }
    setOcultar('hidden')
  }

    const corcheteOne = '<'
    const corcheteTwo = '/>'
  return (
    <>
    <header className='flex items-center w-full top-0 py-5 justify-between mb-40 bg-transparente fixed z-20'>
      <div className='flex ml-2 sm:ml-5 md:ml-8 lg:ml-16'>
          <h2 className='text-2xl text-moradito font-bold'>{corcheteOne}Jhon</h2>
          <span className='text-black text-2xl font-bold'>sito</span>
        <span className='text-moradito text-2xl font-bold'>{corcheteTwo}</span>
      </div>

      <div>
      <nav className={`flex flex-col font-bold uppercase bg-dark text-white fixed top-0 right-0 w-full h-full text-3xl text-center gap-y-6 sm:w-80 md:w-1/2 md:text-xl lg:w-96 ${ocultar} ${animacion}`}>
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

        <a onClick={() => handleSobreMi('#conctato')} className="transition hover:-translate-y-1 hover:scale-100 duration-300 hover:text-moradito"  href={sobreMi}>Conctato</a>
        <DescargaCv />
      </nav>
      </div>


      <div className="fixed right-0 sm:mr-5 md:mr-8 lg:mr-16 mr-3">
        <button onClick={handleOpen} className={`w-10 h-10 bg-moradito rounded-3xl ${menuOculto}`}>
          <AiOutlineMenu className="mx-auto text-lg text-white" />
        </button>
      </div>
    </header>
      <Outlet />
    </>
  )
}

export default Navbar
