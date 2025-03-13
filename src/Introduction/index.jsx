import { NavLink } from 'react-router-dom';
import './Introduction.css'

function Introduction() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <section className='introduction'>
                <h2 className="introduction__title">Bienvenidos a Jekuaá Urubó bosque escuela</h2>
                <p className="introduction__slogan">Aprende y conecta con la naturaleza</p>
            </section>
            <nav className='navBar'>
                <ul className='nabBar__list'>
                    <li className='nabBar__item'><NavLink to='/' onClick={() => scrollToSection('presentation')}>Quiénes somos</NavLink></li>
                    <li className='nabBar__item'><NavLink to='/' onClick={() => scrollToSection('services')}>Nuestra propuesta</NavLink></li>
                    <li className='nabBar__item'><NavLink to='/testimonios' onClick={() => scrollToSection('voces')}>Testimonios</NavLink></li>
                    <li className='nabBar__item'><NavLink to='/solicitaInformacion'>Solicita información</NavLink></li>
                    <li className='nabBar__item'><NavLink to="/experiencias">Nuestras Experiencias</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export { Introduction }