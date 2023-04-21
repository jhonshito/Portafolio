
import { FaFacebookSquare, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
const Contacto = () => {
  return (
    <>
       <footer id="conctato" className='bg-dark lg:h-64 h-80 relative mt-40'>
          <h2 className='text-white text-5xl pt-10 font-bold text-center font-Rubik'>Formas de Contactarme</h2>
          <div className='flex justify-center mt-8 items-center gap-4 text-5xl'>
          <a className="peer" href="https://www.facebook.com/jhon.caicedo.127/" target='_blank'>
            <FaFacebookSquare className="text-blue-600" />
          </a>
          <a className="peer" href="https://www.instagram.com/deiversonjhon/" target='_blank'>
            <FaInstagramSquare className="text-red-400" />
          </a>
          <a href="mailto:caicedojhon957@gmail.com" target='_blank'>
            <MdOutgoingMail className='text-white text-6xl' />
          </a>
          <a href="https://api.whatsapp.com/send?phone=573172771913" target='_blank'>
            <FaWhatsapp className='text-green-400' />
          </a>
          </div>

          <div className='lg:flex text-white text-lg grid text-center mt-4 lg:justify-evenly'>
            <p className=''>2022 Jhon Caicedo @Creador❤😍👩🏾‍💻😜</p>
            <p>Que viva el desarrollo de software (💛💙💔)😘</p>
          </div>
        </footer>
    </>
  )
}

export default Contacto
