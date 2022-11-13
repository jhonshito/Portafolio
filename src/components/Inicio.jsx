
import fotoPortafolio from "../img/fotoPortafoli.jpg"

const Inicio = () => {
    const corcheteOne = '{'
    const corcheteTwo = '}'
  return (
    <div className="mt-10 ">
        <img className="w-40 h-40 mx-auto rounded-full" src={fotoPortafolio} alt="Esta es mi foto" />
        <div className="flex mt-10 text-2xl font-bold justify-center items-center">
            <span>{corcheteOne}</span>
            <h2 className="mr-3">Hola,</h2>
            <h2 className="text-moradito">Soy Jhon Caicedo</h2>
            <span>{corcheteTwo}</span>
        </div>
    </div>
  )
}

export default Inicio