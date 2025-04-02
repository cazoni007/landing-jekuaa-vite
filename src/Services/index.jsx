import React from 'react';
import { LandingContext } from '../LandingContext';
import { NavLink } from 'react-router-dom';
import { YellowHexagon } from "../IconSelector/YellowHexagon";
import { CyanHexagon } from "../IconSelector/CyanHexagon";
import { PurpleHexagon } from "../IconSelector/PurpleHexagon";
import { LightOrangeHexagon } from "../IconSelector/LightOrangeHexagon";
import { DarkOrangeHexagon } from "../IconSelector/DarkOrangeHexagon";
import { GreenHexagon } from '../IconSelector/GreenHexagon';
import './Services.css'

function Services() {
    const { propuestas, activeSection, setActiveSection, activeSection2, setActiveSection2 } = React.useContext(LandingContext);
    return (
        <section className='services' id='services'>
            <h2 className='services__title'>Nuestra propuesta:<br />Conectar, Educar y Transformar</h2>
            <p className='services__speech'>En Jekuaá bosque escuela, creamos experiencias únicas en la naturaleza que transforman la forma de aprender, conectar y vivir. Nuestra misión es:</p>
            <YellowHexagon extra={"services__yellowHexagon"} />
            <CyanHexagon extra={"services__cyanHexagon"} />
            <PurpleHexagon extra={"services__purpleHexagon"} />

            <CyanHexagon extra={"services__cyanHexagon--left"} />
            <DarkOrangeHexagon extra={"services__darkOrangeHexagon--left"}/>
            <div className='services__articlesContainer'>
                {propuestas.map(service => (
                    <article className={`services__article services__article--${service.theme}`} key={service.title}>
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
            <LightOrangeHexagon extra={"services__lightOrangeHexagon"}/>
            <DarkOrangeHexagon extra={"services__darkOrangeHexagon"}/>
            <GreenHexagon extra={"services__greenHexagon"}/>

            <NavLink className={`services__button--a ${activeSection && activeSection2 === 'experiencias' ? 'nabBar__item--focus dropMenu__item--focus' : ''}`} to='/experiencias' onClick={() => { setActiveSection('experiencias'); setActiveSection2('experiencias') }}><button className='services__button'>Nuestras experiencias diseñadas para ti</button></NavLink>
        </section>
    )
}

export { Services }