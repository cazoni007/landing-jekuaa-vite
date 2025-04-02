import './Pack.css'
import { LandingContext } from '../LandingContext';
import { LoadAnimation } from '../IconSelector/LoadAnimation';
import { DarkOrangeHexagon } from '../IconSelector/DarkOrangeHexagon';
import { PurpleHexagon } from '../IconSelector/PurpleHexagon';
import { YellowHexagon } from '../IconSelector/YellowHexagon';
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
                            <div className={`pack__headerContainer`} onClick={() => service.state ? service.setStateFalse() : service.setStateTrue()}>
                                <h1 className={`pack__articleTitle ${service.header}`}>{service.title}</h1>
                            </div>
                            <div className="pack__contentContainer">
                                {service.bonusTitle && <p className='pack__articleText pack__articleText--bonus'>{service.bonusTitle}</p>}
                                <p className='pack__articleText'>{service.speech}</p>
                                <DarkOrangeHexagon extra={"pack__darkOrangeHexagon"} />
                                <YellowHexagon extra={"pack__yellowHexagon"} />
                                <PurpleHexagon extra={"pack__purpleHexagon"} />
                                <div className='pack__imgs pack__imgs--animation'>
                                    {loading && <div className='pack__animation'><LoadAnimation /></div>}
                                    {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                                    {service.img && !error && (<div className='pack__imgFront'><div className='pack__hexagon'><img onLoad={() => setLoading(false)} src={service.img} alt={`Imagen de ${service.title}`} className='pack__img' /></div></div>)}

                                    {service.img2 && !error && (<div className='pack__imgBack'><div className='pack__hexagon'><img onLoad={() => setLoading(false)} src={service.img2} alt={`Imagen de ${service.title}`} className='pack__img' /></div></div>)}
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