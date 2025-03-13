import React from 'react';
import { NavLink } from 'react-router-dom';
import { LandingContext } from '../../LandingContext';
import './DropDownMenu.css';
import { CloseIcon } from '../CloseIcon';

function Menu() {
  const { shouldRenderMenu, animateMenuIn, closeMenu } = React.useContext(LandingContext);

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
          <li className='dropMenu__item'>
            <NavLink to='/' onClick={() => clickIcon('presentation')}>Quienes somos</NavLink>
          </li>
          <li className='dropMenu__item dropMenu__item--border'>
            <NavLink to='/' onClick={() => clickIcon('services')}>Nuestra propuesta</NavLink>
          </li>
          <li className='dropMenu__item'>
            <NavLink to='/testimonios' onClick={() => clickIcon('voces')}>Testimonios</NavLink>
          </li>
          <li className='dropMenu__item dropMenu__item--lastBorder'>
            <NavLink to="/solicitaInformacion" onClick={() => clickIcon('')}>Solicita Informacion</NavLink>
          </li>
          <li className='dropMenu__item dropMenu__item--lastBorder'>
            <NavLink to="/experiencias" onClick={() => clickIcon('')}>Nuestras Experiencias</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Menu };
