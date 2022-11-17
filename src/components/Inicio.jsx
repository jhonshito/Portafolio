
import fotoPortafolio from "../img/fotoPortafoli.jpg"
import 'animate.css';
import { AiFillHeart } from "react-icons/ai";

const Inicio = () => {
    const corcheteOne = '{'
    const corcheteTwo = '}'
  return (
    <div id="inicio" className="mt-10 container mx-auto lg:flex">
        <div className="lg:ml-24">
        <img className="w-40 h-40 mx-auto rounded-full" src={fotoPortafolio} alt="Esta es mi foto" />
        <div className="flex mt-10 text-2xl font-bold justify-center items-center lg:justify-start">
            <span>{corcheteOne}</span>
            <h2 className="mr-3">Hola👋🏾,</h2>
            <h2 className="text-moradito">Soy Jhon Caicedo</h2>
            <span>{corcheteTwo}</span>
        </div>
        <h2 className="text-4xl text-dark font-bold text-center mt-7 md:text-5xl lg:text-left">Frontend Developer.</h2>
        <div className="lg:text-left">
          <p className="text-center mt-6 font-bold">Apasionado por el mundo del Desarrollo de Software.😍😜<AiFillHeart className="animate__animated animate__heartBeat animate__infinite infinite w-12 mx-auto mt-6 text-3xl" /></p>
        </div>
        </div>
        <img className="w-60 mx-auto mt-10 md:w-1/2 lg:w-[40%] lg:mt-0" src="https://robertfrontend.github.io/images/2-img.svg" alt="Esta es una imagen svg" />
    </div>
  )
}

export default Inicio