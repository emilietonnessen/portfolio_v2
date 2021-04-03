import { useState } from "react";

const Menu = ({isMenuOpen}) => {
    const [menuOpen, setMenuOpen] = useState(false);


    const open = 'menu menu-open';
    const closed = 'menu'

    console.log(isMenuOpen);
    
    let classes = closed;
    
    const onClickHandler = () => {
        console.log('clicked');
        
        
        if (!menuOpen) {
            classes = open;
            setMenuOpen(true);
        }
        
        if (menuOpen === true) {
            setMenuOpen(false);
            classes = closed;
        }
    }

    return (
        <nav className={
            menuOpen ? classes : isMenuOpen ? closed : open 
            
            
        
        }>
            <ul className="menu__list">
                <li className="menu__item" >
                    <a href="#portfolio" className="menu__link" onClick={() => onClickHandler()}>
                        <i className="fas fa-palette"></i> 
                        Portfolio
                    </a>
                </li>
                <li className="menu__item" onClick={() => onClickHandler()}>
                    <a href="#about" className="menu__link">
                        <i className="fas fa-user"></i> 
                        about
                    </a>
                </li>
                <li className="menu__item" onClick={() => onClickHandler()}>
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