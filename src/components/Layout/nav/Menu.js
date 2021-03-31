const Menu = ({isMenuOpen}) => {

    return (
        <nav className={isMenuOpen ? 'menu menu-open' : 'menu'}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#portfolio" className="menu__link">
                        <i className="fas fa-palette"></i> 
                        Portfolio
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#about" className="menu__link">
                        <i className="fas fa-user"></i> 
                        about
                    </a>
                </li>
                <li className="menu__item">
                    <a href="#contact" className="menu__link">
                        <i className="fas fa-envelope"></i> 
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;