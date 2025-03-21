import React from 'react';
import { NavLink } from 'react-router-dom';
import { LandingContext } from '../../LandingContext';
import './DropDownMenu.css';
import { CloseIcon } from '../CloseIcon';

function Menu() {
  const { shouldRenderMenu, animateMenuIn, closeMenu } = React.useContext(LandingContext);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  if (!shouldRenderMenu) return null;

  const clickIcon = (id) => {
    closeMenu();
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeOnOverlayClick = () => {
    closeMenu();
  };

  return (
    <div className={`menu-overlay ${animateMenuIn ? 'menu-overlay--visible' : ''}`} onClick={closeOnOverlayClick}>
      <div className={`dropMenu ${animateMenuIn ? 'dropMenu--visible' : ''}`} onClick={(e) => e.stopPropagation()}>
        <CloseIcon />
        <ul className='dropMenu__list'>
          <li
            className={`dropMenu__item dropMenu--menu-principal ${activeSection === 'menu' ? 'dropMenu__item--focus' : ''}`}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
            onClick={() => { setActiveSection('menu'); setMenuOpen(true) }}
          >
            <NavLink to="/">Menú Principal</NavLink>
            {menuOpen && (
              <ul className="dropMenu--submenu">
                <li className='dropMenu__item'><NavLink to="/" onClick={() => clickIcon('presentation')}>Quiénes somos</NavLink></li>
                <li className='dropMenu__item'><NavLink to="/" onClick={() => clickIcon('services')}>Nuestra propuesta</NavLink></li>
              </ul>
            )}
          </li>
          <li className={`dropMenu__item dropMenu__item--lastBorder ${activeSection === 'experiencias' ? 'dropMenu__item--focus' : ''}`}
            onClick={() => setActiveSection('experiencias')}>
            <NavLink to="/experiencias" onClick={() => clickIcon('')}>Experiencias personalizadas</NavLink>
          </li>
          <li className={`dropMenu__item dropMenu__item--lastBorder ${activeSection === 'programas' ? 'dropMenu__item--focus' : ''}`}
            onClick={() => setActiveSection('programas')}>
            <NavLink to="/servicios" onClick={() => clickIcon('')}>Programas</NavLink>
          </li>
          <li className={`dropMenu__item dropMenu__item--lastBorder ${activeSection === 'testimonios' ? 'dropMenu__item--focus' : ''}`}
            onClick={() => setActiveSection('testimonios')}>
            <NavLink to='/testimonios' onClick={() => clickIcon('voces')}>Testimonios</NavLink>
          </li>
          <li className={`dropMenu__item dropMenu__item--lastBorder ${activeSection === 'informacion' ? 'dropMenu__item--focus' : ''}`}
            onClick={() => setActiveSection('informacion')}>
            <NavLink to="/solicitaInformacion" onClick={() => clickIcon('')}>Solicita Informacion</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Menu };
