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
                    <article  ref={service.observador ? service.observador.ref : null} className={`services__article services__article--${service.theme} ${service.observador && 'hidden'}`} key={service.title}>
                        <div className='services__text'>
                            <h2 className='services__titleArticle'>{service.title}</h2>
                            <p className='services__speechArticle'>{service.speech}</p>
                        </div>

                        <div className='services__media'>
                            {service.hexagon1}
                            {service.hexagon2}
                            {service.hexagon3}
                            <div className='services__hexagon'>
                                <img src={service.image} alt={`Imagen de ${service.title}`} className="services__image" />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <NavLink className={`services__button--a ${activeSection && activeSection2 === 'experiencias' ? 'nabBar__item--focus dropMenu__item--focus' : ''}`} to='/experiencias' onClick={() => { setActiveSection('experiencias'); setActiveSection2('experiencias') }}><button className='services__button'>Nuestras experiencias diseñadas para ti</button></NavLink>
        </section>
    )
}

export { Services }