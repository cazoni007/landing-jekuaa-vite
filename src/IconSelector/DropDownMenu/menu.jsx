import React from 'react';
import { NavLink } from 'react-router-dom';
import { LandingContext } from '../../LandingContext';
import './DropDownMenu.css'
import { CloseIcon } from '../CloseIcon'

function Menu({ isVisible }) {
    const { setModal } = React.useContext(LandingContext);
    const clickIcon = (id) => {
        setModal(false)
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className={`dropMenu ${isVisible ? 'dropMenu--visible' : ''}`}>
            <CloseIcon />
            <ul className='dropMenu__list'>
                <li className='dropMenu__item'><NavLink to='/' onClick={() => clickIcon('presentation')}>Quienes somos</NavLink></li>
                <li className='dropMenu__item dropMenu__item--border'><NavLink to='/' onClick={() => clickIcon('services')}>Nuestra propuesta</NavLink></li>
                <li className='dropMenu__item'><NavLink to='/testimonios' onClick={() => clickIcon('voces')}>Testimonios</NavLink></li>
                <li className='dropMenu__item dropMenu__item--lastBorder'><NavLink to="/solicitaInformacion" onClick={() => clickIcon('')}>Solicita Informacion</NavLink></li>
            </ul>
        </div>
    )
}

export { Menu }