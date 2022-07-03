import CartWidget from './CartWidget'
import logo from '../assets/img/logo_elefante_9.png'
const NavBar = (props) => {
    return (
        <nav className="navBar">
            <div className="navBar__container">
                <img src={logo} alt='logo elefante'></img>
                <h1 className="navBar__title">{props.name.toUpperCase()}</h1>
                <ul className="navBar__menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Productos <i class="fa-solid fa-angle-down"></i></a>
                        <ul className="navBar__menu--submenu">
                            <li><a href="#">Overdrives/Distorsiónes</a></li>
                            <li><a href="#">Modulaciónes</a></li>
                            <li><a href="#">Compresores</a></li>
                            <li><a href="#">Filtros</a></li>
                            <li><a href="#">Fuentes</a></li>
                            <li><a href="#">Otros</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav >);
}

export default NavBar;