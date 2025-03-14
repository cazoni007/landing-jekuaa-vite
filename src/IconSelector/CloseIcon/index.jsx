import { IconSelector } from '..'; // Importa el componente TodoIcon
import React from 'react';
import { LandingContext } from '../../LandingContext';
import './CloseIcon.css'

function CloseIcon() {
  const {closeMenu} = React.useContext(LandingContext);
  const clickIcon = () => {
    closeMenu()
  }
  return (
      <button className='buttonClose' onClick={clickIcon} alt="boton cerrar menu">
        <IconSelector type="close"/>
      </button> /* Renderiza el ícono de "close" */
  );
}

export { CloseIcon };