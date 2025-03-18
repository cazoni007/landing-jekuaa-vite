import './Form.css'
import React, { useContext } from 'react'
import { LandingContext } from '../LandingContext'

function Form() {
    const {tiktok, facebook, whatsApp} = useContext(LandingContext);
    const [isVisible, setIsVisible] = React.useState(false);
    const formRef = React.useRef(null);

    React.useEffect(() => {
        const formElement = formRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );
        if (formElement) {
            observer.observe(formElement);
        }
        return () => {
            if (formElement) {
                observer.unobserve(formElement);
            }
        };
    }, []);
    return (
        <>
            <h2 className='formTitle'>Ponte en contacto con nosotros</h2>
            <form className='form'>
                <label className='form__label' htmlFor="nombre">
                    <span className='form__spanText'>* Ingresa tu nombre o institución:</span>
                    <input className='form__inputTag' type="text" id="nombre" name="nombre" autoComplete="name" required placeholder="Ejemplo: Juan Pérez o Colegio ABC" />
                </label>

                <label className='form__label' htmlFor="numero">
                    <span className='form__spanText'>* Número de personas:</span>
                    <input className='form__inputTag' type="number" id="numero" name="numero" min="1" required placeholder="Ejemplo: 5" />
                </label>

                <label className='form__label' htmlFor="email">
                    <span className='form__spanText'>* Correo electrónico:</span>
                    <input className='form__inputTag' type="email" id="email" name="email" autoComplete="email" required placeholder="Ejemplo: correo@email.com" />
                </label>

                <label className='form__label' htmlFor="telefono">
                    <span className='form__spanText'>Número de teléfono:</span>
                    <input className='form__inputTag' type="tel" id="telefono" name="telefono" autoComplete="tel" placeholder="Ejemplo: +591 70012345" />
                </label>

                <label className='form__label' htmlFor="comentarios">
                    <span className='form__spanText'>Comentarios adicionales:</span>
                    <textarea className='form__inputTag' id="comentarios" name="comentarios" placeholder="Escribe aquí cualquier comentario adicional..."></textarea>
                </label>

                <button className='form__buttomSubmit' type="submit" ref={formRef}>Enviar</button>
                <div className={`socialMedia ${isVisible ? 'animate' : ''}`}>
                    <a href='https://www.facebook.com/JekuaaBosqueEscuela' target="_blank" rel="noopener noreferrer" className='socialMedia__contactIcon'><img src={facebook} alt='facebook icon'></img></a>
                    <a href='https://www.instagram.com/jekuaaurubo/?igsh=MzZvdHQyaHZwazhs' target="_blank" rel="noopener noreferrer" className='socialMedia__contactIcon'><img src={tiktok} alt='tiktok icon'></img></a>
                    <a href='https://api.whatsapp.com/send/?phone=59178453442&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer" className='socialMedia__contactIcon'><img src={whatsApp} alt='whatsapp icon'></img></a>
                </div>
            </form>
        </>

    )
}

export { Form }