
import certificado1 from "../imgCertificados/certificado-git.jpg"
import certificado2 from "../imgCertificados/certificado-html5-1.jpg"
import certificado3 from "../imgCertificados/certificado-html5-2.jpg"
import certificado4 from "../imgCertificados/certificado-html5-3.jpg"
import certificado5 from "../imgCertificados/certificado-html5-4.jpg"
import certificado6 from "../imgCertificados/certificado-javascript-1.jpg"
import certificado7 from "../imgCertificados/certificado-javascript-2.jpg"
import certificado8 from "../imgCertificados/certificado-logica-1.jpg"
import certificado9 from "../imgCertificados/certificado-logica-2.jpg"
import certificado10 from "../imgCertificados/certificado-logica-3.jpg"
import certificado11 from "../imgCertificados/ingles-1_page-0001.jpg"
import certificado12 from "../imgCertificados/ingles-2_page-0001.jpg"
import Estudios from "./Estudios"
const Certificado = () => {

    const imgCertificados =[
        certificado1,
        certificado2,
        certificado3,
        certificado4,
        certificado5,
        certificado6,
        certificado7,
        certificado8,
        certificado9,
        certificado10,
        certificado11,
        certificado12
    ]
  return (
    <section className="w-full">
        <Estudios img={imgCertificados} />
    </section>
  )
}

export default Certificado