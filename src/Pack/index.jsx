import './Pack.css'
import DownArrow from '../IconSelector/Icons/arrow-down-icon.svg?react';
import UpArrow from '../IconSelector/Icons/arrow-up-icon.svg?react';
import { LandingContext } from '../LandingContext';
import React from 'react';

function Pack() {
    const { services } = React.useContext(LandingContext)
    return (
        <>
            <h1 className='pack__title'>✨ Nuestros Servicios ✨</h1>
            <p className='pack__subtitle'>Descubre experiencias únicas para aprender, conectar y transformar en la naturaleza.</p>
            <section className='pack'>
                {services.map((service, index) => (
                    <article className='pack__article' key={index}>
                        <div className='pack__headerContainer'>
                            <h1 className='pack__articleTitle'>{service.title}</h1>
                            <span className={`Icon-upArrow ${service.state ? "invisible" : ""}`} onClick={service.setStateTrue}><UpArrow /></span>
                            <span className={`Icon-downArrow ${!service.state ? "invisible" : ""}`} onClick={service.setStateFalse}><DownArrow /></span>
                        </div>
                        <div className={`pack__contentContainer ${service.state ? "pack__contentContainer--hidden" : ""}`}>
                            <p className='pack__articleText'>{service.speech}</p>
                            <div className='pack__imgs pack__imgs--animation'>
                                <div className='pack__imgFront'><img src={service.img} alt={`Imagen de ${service.title}`} className='pack__img' /></div>
                                <div className='pack__imgBack'><img src={service.img2} alt={`Imagen de ${service.title}`} className='pack__img' /></div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}

export { Pack };