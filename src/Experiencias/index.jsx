import React from 'react';
import { LandingContext } from '../LandingContext';
import { LoadAnimation } from '../IconSelector/LoadAnimation';
import './Experiencias.css'

function Experiences() {
    const { experiences, experiences2 } = React.useContext(LandingContext);
    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // Nuevo: Creamos un ref para almacenar cada artículo
    const articlesRef = React.useRef([]);

    // Nuevo: Usamos IntersectionObserver para detectar cuándo cada artículo entra en vista
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Quita la clase que oculta y agrega la clase de animación
                    entry.target.classList.remove('hidden-article');
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
    }, [experiences, experiences2]);
    return (
        <div className='experiences'>
            {/* Cabecera */}
            <h2 className='experiences__title'>🌿✨ Nuestras Experiencias Diseñadas para Ti 🌍🌟</h2>
            <p className='experiences__subtitle'>Descubre espacios únicos para aprender, conectar y crecer en plena naturaleza.</p>
            {/* Contenido Principal */}
            <section className='experiences__articleContainer'>
                <div className='experience__firstArticles'>
                    {experiences.map((experience, index) => {
                        const [loading, setLoading] = React.useState(!!experience.img || !!experience.img2);
                        const [error, setError] = React.useState(false);
                        return (
                            <article ref={el => articlesRef.current[index] = el} className={`experiences__article ${experience.color} hidden-article ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`} key={index}>
                                <div className='experiences__textContainer'>
                                    <h2 className='experiences__titleArticle' >{experience.title}</h2>
                                    <p className='experiences__speechArticle'>{experience.speech}</p>
                                </div>
                                <div className='experiences__imgArticle experiences__imgArticle--section3'>
                                    <div className='experiences__images--front'>
                                        {loading && <div className='experiences__animation'><LoadAnimation /></div>}
                                        {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                                        {experience.img && !error && (<img onLoad={() => setLoading(false)} src={experience.img} alt={`Imagen de niño escavando`} className="experiences__image" />)}
                                    </div>
                                    {/* Lado trasero con imagen */}
                                    <div className='experiences__images--back'>
                                        {loading && <div className='experiences__animation'><LoadAnimation /></div>}
                                        {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                                        {experience.img2 && !error && (<img onLoad={() => setLoading(false)} src={experience.img2} alt={`Imagen sobre ${experience.title}`} className="experiences__image" />)}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <div className='experience__secondArticles'>
                    {experiences2.map((experience, index) => {
                        const [loading, setLoading] = React.useState(!!experience.img || !!experience.img2);
                        const [error, setError] = React.useState(false);
                        return (
                            <article key={index + experiences.length} ref={el => articlesRef.current[index + experiences.length] = el} className={`experiences__article ${experience.color} hidden-article ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                                <div className='experiences__textContainer'>
                                    <h2 className='experiences__titleArticle' >{experience.title}</h2>
                                    <p className='experiences__speechArticle'>{experience.speech}</p>
                                </div>
                                <div className='experiences__imgArticle experiences__imgArticle--section3'>
                                    <div className='experiences__images--front'>
                                        {loading && <div className='experiences__animation'><LoadAnimation /></div>}
                                        {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                                        {experience.img && !error && (<img onLoad={() => setLoading(false)} src={experience.img} alt={`Imagen de ${experience.title}`} className="experiences__image" />)}
                                    </div>
                                    {/* Lado trasero con imagen */}
                                    <div className='experiences__images--back'>
                                        {loading && <div className='experiences__animation'><LoadAnimation /></div>}
                                        {error && <p className="errorMessage">No se pudo cargar la imagen</p>}
                                        {experience.img2 && !error && (<img onLoad={() => setLoading(false)} src={experience.img2} alt={`Imagen sobre ${experience.title}`} className="experiences__image" />)}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    );
};

export { Experiences };