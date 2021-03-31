import { useState } from 'react';
import Brand from './Brand';
import Media from './Media';
import Menu from './Menu';

const Sidebar = () => {
    const [isMenuOpen, setMenuOpen] = useState('false');

    const openMenuHandler = () => {
        setMenuOpen(!isMenuOpen); 
    }

    return (
        <div className="sidebar">
            <Brand />
            <Menu  isMenuOpen={isMenuOpen ? true : false } />
            <Media />
            
            <div className="nav-icon" onClick={() => openMenuHandler()}>
                <button className="nav-icon__button"></button>
            </div>
            
        </div>
    );
}

export default Sidebar;