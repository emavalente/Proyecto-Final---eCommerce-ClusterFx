// BRAND + MENU CLICKEABLE + IMPORTAR TAILWIND

const NavBar = (props) => {
    return (
        <nav className="navBar">
            <h1 className="navBar__title">{props.name.toUpperCase()}</h1>
            <ul className="navBar__menu">
                <li><a>Home</a></li>
                <li><a>Productos <i class="fa-solid fa-angle-down"></i></a>
                    <ul className="navBar__menu--submenu">
                        <li><a>Overdrives/Distorsiónes</a></li>
                        <li><a>Modulaciónes</a></li>
                        <li><a>Compresores</a></li>
                        <li><a>Filtros</a></li>
                        <li><a>Fuentes</a></li>
                        <li><a>Otros</a></li>
                    </ul>
                </li>
                <li><a>Contacto</a></li>
            </ul>
        </nav>);
}

export default NavBar;