import './Header.css';
import logo from './logo.png';
import logo_text from './logo-text.png'
import { DropDownMenu } from '../IconSelector/DropDownMenu/index.jsx'

function Header() {
    return (
        <header className="header">
            <div className='header__content'>
                <div className='header__logo'>
                    <img src={logo} alt='logo' className='logo' />
                    <img src={logo_text} alt='logo text' className='logo-text' />
                </div>
                <h2 className="header__title">Bienvenidos a Jekuaá Urubó bosque escuela</h2>
                <p className="header__slogan">Aprende y conecta con la naturaleza</p>
            </div>
            <DropDownMenu />
        </header>
    )
}

export { Header }