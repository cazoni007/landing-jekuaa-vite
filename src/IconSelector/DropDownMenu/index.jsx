import { IconSelector } from '..'; // Importa el componente TodoIcon
import { Menu } from './menu';
import React from 'react';
import { LandingContext } from '../../LandingContext';
import './DropDownMenu.css'

function DropDownMenu() {
  const {modal, setModal} = React.useContext(LandingContext);
  const clickIcon = () => {
    setModal(!modal);
  }
  return (
    <>
      <button className='buttonMenu' onClick={clickIcon} alt="boton menu">
        <IconSelector type="menu"/>
      </button> {/* Renderiza el ícono de "check" */}
      <Menu isVisible={modal}/>
    </>
  );
}

export { DropDownMenu };
