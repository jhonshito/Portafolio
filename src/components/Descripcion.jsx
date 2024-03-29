
import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Descripcion = () => {
  return (
    <section id="descripcion" className="pt-32">
    <div className='ml-3 mr-3 mb-20 border-l-8 border-azul bg-azulito py-10 md:ml-10 lg:w-[80%] lg:mt-20 lg:mx-auto xl:mt-20 drop-shadow-xl'>
      <div className='ml-5'>
        <h1 className='text-4xl mb-3 font-bold text-azul font-Rubik'>Sobre mi</h1>
        <p className="w-36 bg-moradito border-2 border-azul mt-2 mb-3"></p>
        <p className='font-bold text-md tracking-wide text-azul'>Apasionado por desarrollo de aplicaciones web 👩🏾‍💻😍 con framework en javascript como Reac.JS,  Cuento con la voluntad de aportar mis conocimientos y habierto en aprender màs en este mundo. </p>
      </div>
      <div className="flex mt-7 flex-wrap text-3xl gap-6 ml-4">

        <div className="relative">
          <a className="peer" href="https://www.facebook.com/jhon.caicedo.127/" target='_blank'>
            <FaFacebookSquare className="text-blue-600" />
          </a>
          <span className="absolute text-sm bottom-10 bg-slate-800 w-24 py-2 font-bold text-center rounded-lg left-5 text-white tracking-wide hidden peer-hover:block animate__animated animate__backInLeft">Facebook</span>
        </div>

        <div className="relative">
          <a className="peer" href="https://github.com/jhonshito" target='_blank'>
            <FaGithub />
          </a>
          <span className="absolute text-sm bottom-10 bg-slate-800 w-24 py-2 font-bold text-center rounded-lg left-5 text-white tracking-wide hidden peer-hover:block animate__animated animate__backInLeft">GitHub</span>
        </div>

        <div className="relative">
          <a className="peer" href="https://www.instagram.com/deiversonjhon/" target='_blank'>
            <FaInstagramSquare className="text-red-400" />
          </a>
          <span className="absolute text-sm bottom-10 bg-slate-800 w-24 py-2 font-bold text-center rounded-lg left-5 text-white tracking-wide hidden peer-hover:block animate__animated animate__backInLeft">Instagram</span>
        </div>
        {/* <Link className="text-base flex items-center gap-2 pl-2 mx-2 bg-dark text-white uppercase w-64 font-semibold text-center py-1 rounded-lg" to='estudios'>estudios e certificados
          <FaArrowAltCircleRight className="text-white" />
        </Link> */}
      </div>
    </div>
    </section>
  )
}

export default Descripcion
