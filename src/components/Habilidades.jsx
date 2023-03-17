
import logoJavascript from "../icons/js.png"
import logoHtml from "../icons/html-5.png"
import logoCss from "../icons/css-3.png"
import logoBootstrap from "../icons/bootstrap.png"
import logoTailwind from "../icons/Tailwind_CSS_Logo.svg.png"
import logoGit from "../icons/icons8-git-144.png"
import logo from "../icons/physics.png"
import logoSass from "../icons/icons8-sass-144.png"
import logoRedux from "../icons/redux.png"

const Habilidades = () => {

  const logoArray = [logoJavascript, logoHtml, logoCss, logoBootstrap, logoTailwind, logoGit, logoSass, logo, logoRedux]

  const nombreArray = ['JavaScrip', 'HTML5', 'CSS3', 'BOOTSTRAP', 'TAILWIND CSS', 'GIT', 'SASS', 'REACT JS', 'REDUX']

  return (
    <section id="habilidades" className="mb-10 lg:container lg:mx-auto pt-32">
      <h1 className="text-4xl text-center font-bold uppercase text-dark dark:text-white font-Rubik">Habilidades</h1>
      <p className="text-center font-semibold text-xl mt-2 text-dark dark:text-white">Tecnologícas</p>
      <p className="w-28 bg-moradito border-2 border-moradito mx-auto mb-12 mt-4"></p>
      <div className="flex flex-wrap gap-5 mt-7 border-1 border-dark p-4 justify-center drop-shadow-xl bg-dark">

        {
          logoArray.map((item, index )=> (
            <div key={index} className="w-28 py-7">
              <img className="w-[60px] mx-auto contrast-200" src={item} alt={`Este es el lgo de ${nombreArray[index]}`} />
              <p className="text-center font-bold text-white mt-3">{nombreArray[index]}</p>
            </div>
          ))
        }

      </div>
    </section>
  )
}

export default Habilidades