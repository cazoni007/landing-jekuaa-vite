import React from 'react';
import { LandingContext } from '../LandingContext';
import { NavLink } from 'react-router-dom';
import './Services.css'

function Services() {
    const { propuestas, activeSection, setActiveSection, activeSection2, setActiveSection2 } = React.useContext(LandingContext);
    return (
        <section className='services' id='services'>
            <h2 className='services__title'>Nuestra propuesta:<br />Conectar, Educar y Transformar</h2>
            <p className='services__speech'>En Jekuaá bosque escuela, creamos experiencias únicas en la naturaleza que transforman la forma de aprender, conectar y vivir. Nuestra misión es:</p>
            <div className='services__articlesContainer'>
                {propuestas.map(service => (
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
            <NavLink className='services__button--a' to='/experiencias'><button className='services__button'>Nuestras experiencias diseñadas para ti</button></NavLink>
        </section>
    )
}

export { Services }