import React from 'react';
import { IconSelector } from '..';
import { LandingContext } from '../../LandingContext';
import './DropDownMenu.css';
import { Menu } from './Menu';

function DropDownMenu() {
  const { toggleMenu } = React.useContext(LandingContext);
  return (
    <>
      <button className='buttonMenu' onClick={toggleMenu} alt="boton menu">
        <IconSelector type="menu"/>
      </button>
      <Menu />
    </>
  );
}

export { DropDownMenu };
