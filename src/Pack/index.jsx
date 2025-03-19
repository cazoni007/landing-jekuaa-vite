import './Pack.css'
import DownArrow from '../IconSelector/Icons/arrow-down-icon.svg?react';
import UpArrow from '../IconSelector/Icons/arrow-up-icon.svg?react';
import { LandingContext } from '../LandingContext';
import { LoadAnimation } from '../IconSelector/LoadAnimation';
import useIntersectionObserver from '../useIntersectionObserver';
import React from 'react';

function Pack() {
    const { services } = React.useContext(LandingContext)
    // Nuevo: Creamos un ref para almacenar cada artículo
    const articlesRef = React.useRef([]);

    // Nuevo: Usamos IntersectionObserver para detectar cuándo cada artículo entra en vista
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Quita la clase que oculta y agrega la clase de animación
                    entry.target.classList.remove('hidden');
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.3 });

        // Observa cada artículo
        articlesRef.current.forEach(article => {
            if (article) observer.observe(article);
        });

        // Limpieza
        return () => {
            articlesRef.current.forEach(article => {
                if (article) observer.unobserve(article);
            });
        };
    }, [services]);
    return (
        <>
            <h1 className='pack__title'>✨ Nuestros Servicios ✨</h1>
            <p className='pack__subtitle'>Descubre experiencias únicas para aprender, conectar y transformar en la naturaleza.</p>
            <section className='pack'>
                {services.map((service, index) => {
                    const [loading, setLoading] = React.useState(!!service.img || !!service.img2);
                    const [error, setError] = React.useState(false);

                    return (
                        <article ref={el => articlesRef.current[index] = el} className='pack__article hidden' key={index}>
                            <div className='pack__headerContainer' onClick={() => service.state ? service.setStateFalse() : service.setStateTrue()}>
                                <h1 className={`pack__articleTitle ${service.bonus}`}>{service.title}</h1>
                                <span className={`Icon-upArrow ${service.state ? "invisible" : ""}`}><UpArrow /></span>
                                <span className={`Icon-downArrow ${!service.state ? "invisible" : ""}`}><DownArrow /></span>
                            </div>
                            <div className={`pack__contentContainer ${service.state ? "pack__contentContainer--hidden" : ""}`}>
                                {service.bonusTitle && <p className='pack__articleText pack__articleText--bonus'>{service.bonusTitle}</p>}
                                <p className='pack__articleText'>{service.speech}</p>
                                <div className='pack__imgs pack__imgs--animation'>
                                    {loading && <div className='pack__animation'><LoadAnimation /></div>}
                                    {error && <p className="errorMessage">No se pudo cargar el video</p>}

                                    {service.img && !error && (<div className='pack__imgFront'><img onLoad={() => setLoading(false)} src={service.img} alt={`Imagen de ${service.title}`} className='pack__img' /></div>)}

                                    {service.img && !error && (<div className='pack__imgBack'><img onLoad={() => setLoading(false)} src={service.img2} alt={`Imagen de ${service.title}`} className='pack__img' /></div>)}
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export { Pack };