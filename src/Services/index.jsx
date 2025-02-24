import { NatureIcon } from '../IconSelector/NatureIcon'
import { CompostIcon } from '../IconSelector/CompostIcon'
import { LightBulbIcon } from '../IconSelector/LightBulbIcon'
import fomentarImg from './jovenes-certificado.jpg'
import fortalecerImg from './nina-y-senora.jpg'
import promoverImg from './ninos-jurando.jpg'
import './Services.css'

function Services() {
    const services = [{
        theme: "fomentar",
        title: "Fomentar aprendizajes significativos",
        speech: "Diseñamos programas que integran la educación y la experiencia, inspirando conexión y reflexión.",
        icon: <LightBulbIcon />,
        image: fomentarImg,
    },
    {
        theme: "fortalecer",
        title: "Fortalecer vínculos humanos y ambientales",
        speech: "Creamos espacios para que familias, estudiantes y equipos se conecten con la naturaleza y entre sí.",
        icon: <NatureIcon />,
        image: fortalecerImg,
    },
    {
        theme: "promover",
        title: "Promover la sostenibilidad",
        speech: "Desarrollamos conciencia ambiental a través de prácticas y valores sostenibles.",
        icon: <CompostIcon />,
        image: promoverImg,
    },]
    return (
        <section className='services' id='services'>
            <h2 className='services__title'>Nuestra propuesta:<br />Conectar, Educar y Transformar</h2>
            <p className='services__speech'>En Jekuaá Urubó bosque escuela, creamos experiencias únicas en la naturaleza que transforman la forma de aprender, conectar y vivir. Nuestra misión es:</p>
            <div className='services__articlesContainer'>
                {services.map(service => (
                    <article className={`services__article services__article--${service.theme}`} key={service.title}>
                        {/* Lado frontal */}
                        <div className='services__front'>
                            <div className='services__iconArticle'>{service.icon}</div>
                            <h2 className='services__titleArticle'>{service.title}</h2>
                            <p className='services__speechArticle'>{service.speech}</p>
                        </div>

                        {/* Lado trasero con imagen */}
                        <div className='services__back'>
                            <img src={service.image} alt={`Imagen de ${service.title}`} className="services__image" />
                        </div>
                    </article>
                ))}
            </div>
            <button className='services__button'>Nuestras experiencias diseñadas para ti</button>
        </section>
    )
}

export { Services }