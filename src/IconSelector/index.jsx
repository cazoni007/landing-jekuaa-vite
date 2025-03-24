import DropDownMenu from './Icons/menu-icon.svg?react';    // Icono de check
import CloseIcon from './Icons/close-icon.svg?react';    //Icono de close
import TreeIcon from './Icons/tree-icon.svg?react';
import LeafIcon from './Icons/leaf-icon.svg?react';
import NatureIcon from './Icons/nature-icon.svg?react';
import CompostIcon from './Icons/compost-icon.svg?react';
import LightbulbIcon from './Icons/lightbulb-icon.svg?react';
import YellowHexagon from './Icons/hexagono-amarillo.svg?react';
import CyanHexagon from './Icons/hexagono-cian.svg?react';
import PurpleHexagon from './Icons/hexagono-morado.svg?react';
import LightOrangeHexagon from './Icons/hexagono-naranjaClaro.svg?react';
import DarkOrangeHexagon from './Icons/hexagono-naranjaOscuro.svg?react';
import GreenHexagon from './Icons/hexagono-verde.svg?react';

// Componente principal que renderiza el icono según el tipo
function IconSelector({ extra, type, ...props }) {
  // Objeto que almacena los iconos según el nombre
  const iconTypes = {
    menu: <DropDownMenu {...props} />,
    close: <CloseIcon />,
    tree: <TreeIcon />,
    leaf: <LeafIcon />,
    leaf2: <LeafIcon />,
    nature: <NatureIcon />,
    compost: <CompostIcon />,
    lightbulb: <LightbulbIcon />,
    yellowHexagon: <YellowHexagon />,
    cyanHexagon: <CyanHexagon {...props}/>,
    purpleHexagon: <PurpleHexagon />,
    lightOrangeHexagon: <LightOrangeHexagon />,
    darkOrangeHexagon: <DarkOrangeHexagon />,
    greenHexagon: <GreenHexagon />,
  };
  return (
    <span className={`Icon-${type} ${extra ? extra : ''}`}>
      {iconTypes[type]} {/* Muestra el icono correspondiente */}
    </span>
  );
}

export { IconSelector };
