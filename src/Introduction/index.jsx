import { NavLink } from 'react-router-dom';
import React from 'react';
import './Introduction.css'

function Introduction() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('');
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <section className='introduction'>
                <h2 className="introduction__title">Bienvenidos a Jekuaá Bosque Escuela</h2>
                <p className="introduction__slogan">Aprende y conecta con la naturaleza</p>
            </section>
            <nav className='navBar'>
                <ul className='nabBar__list'>
                    <li
                        className={`nabBar__item menu-principal ${activeSection === 'menu' ? 'nabBar__item--focus' : ''}`}
                        onMouseEnter={() => setMenuOpen(true)}
                        onMouseLeave={() => setMenuOpen(false)}
                        onClick={() => {setActiveSection('menu'); setMenuOpen(true)}}
                    >
                        <NavLink to="/">Menú Principal</NavLink>
                        {menuOpen && (
                            <ul className="submenu">
                                <li className='nabBar__item'><NavLink to="/" onClick={() => scrollToSection('presentation')}>Quiénes somos</NavLink></li>
                                <li className='nabBar__item'><NavLink to="/" onClick={() => scrollToSection('services')}>Nuestra propuesta</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li className={`nabBar__item ${activeSection === 'experiencias' ? 'nabBar__item--focus' : ''}`}
                        onClick={() => setActiveSection('experiencias')}><NavLink to="/experiencias">Experiencias personalizadas</NavLink></li>
                    <li className={`nabBar__item ${activeSection === 'programas' ? 'nabBar__item--focus' : ''}`}
                        onClick={() => setActiveSection('programas')}><NavLink to="/servicios">Programas</NavLink></li>
                    <li className={`nabBar__item ${activeSection === 'voces' ? 'nabBar__item--focus' : ''}`}
                        onClick={() => { setActiveSection('voces'); scrollToSection('voces'); }}><NavLink to='/testimonios'>Testimonios</NavLink></li>
                    <li className={`nabBar__item ${activeSection === 'solicita' ? 'nabBar__item--focus' : ''}`}
                        onClick={() => setActiveSection('solicita')}><NavLink to='/solicitaInformacion'>Solicita información</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export { Introduction }