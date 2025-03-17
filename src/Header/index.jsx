import './Header.css';
import { useContext } from 'react';
import { LandingContext } from '../LandingContext/index.jsx';
import { DropDownMenu } from '../IconSelector/DropDownMenu/index.jsx'

function Header() {
    const {logo} = useContext(LandingContext);
    return (
        <header className="header">
            <div className='header__content'>
                <div className='header__logo'>
                    <img src={logo} alt='logo' className='logo'/> 
                </div>
                <h2 className="header__title">Bienvenidos a Jekuaá Bosque Escuela</h2>
                <p className="header__slogan">Aprende y conecta con la naturaleza</p>
            </div>
            <DropDownMenu />
        </header>
    )
}

export { Header }