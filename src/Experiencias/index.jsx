import React from 'react';
import { LandingContext } from '../LandingContext';
import './Experiencias.css'

function Experiences() {
    const { experiences, experiences2 } = React.useContext(LandingContext);
    React.useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div className='experiences'>
            {/* Cabecera */}
            <h2 className='experiences__title'>🌿✨ Nuestras Experiencias Diseñadas para Ti 🌍🌟</h2>
            <p className='experiences__subtitle'>Descubre espacios únicos para aprender, conectar y crecer en plena naturaleza.</p>
            {/* Contenido Principal */}
            <section className='experiences__articleContainer'>
                <div className='experience__firstArticles'>
                    {experiences.map((experience, index) => (
                        <article className='experiences__article' key={index}>
                            <div className='experiences__textContainer'>
                                <h2 className='experiences__titleArticle' >{experience.title}</h2>
                                <p className='experiences__speechArticle'>{experience.speech}</p>
                            </div>
                            <div className='experiences__imgArticle experiences__imgArticle--section3'>
                                <div className='experiences__images--front'>
                                    <img src={experience.img} alt={`Imagen de niño escavando`} className="experiences__image" />
                                </div>
                                {/* Lado trasero con imagen */}
                                <div className='experiences__images--back'>
                                    <img src={experience.img2} alt={`Imagen sobre ${experience.title}`} className="experiences__image" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className='experience__secondArticles'>
                    {experiences2.map((experience, index) => (
                        <article className='experiences__article' key={index}>
                            <div className='experiences__textContainer'>
                                <h2 className='experiences__titleArticle' >{experience.title}</h2>
                                <p className='experiences__speechArticle'>{experience.speech}</p>
                            </div>
                            <div className='experiences__imgArticle experiences__imgArticle--section3'>
                                <div className='experiences__images--front'>
                                    <img src={experience.img} alt={`Imagen de ${experience.title}`} className="experiences__image" />
                                </div>
                                {/* Lado trasero con imagen */}
                                <div className='experiences__images--back'>
                                    <img src={experience.img2} alt={`Imagen sobre ${experience.title}`} className="experiences__image" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export { Experiences };