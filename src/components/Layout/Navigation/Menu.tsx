import React from 'react';
import { Link } from 'react-scroll';
import { NavigationMenuProps } from '../../../constants/interfaces';
import { Envelope, Portfolio, User } from '../../UI/Icons';


const Menu: React.FC<NavigationMenuProps> = ({onClick}) => (
    <nav className="menu">

        {/* List */}
        <ul className="menu__list">

            <li className="menu__item" onClick={onClick}>
                <Link 
                    activeClass="menu__item--active" 
                    to="portfolio" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="menu__link" 
                    onClick={onClick} >

                    <Portfolio classes="menu__link--icon" />
                    Portfolio
                </Link>
            </li>


            <li className="menu__item" onClick={onClick}>
                <Link 
                    activeClass="menu__item--active" 
                    to="about" spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="menu__link" 
                    onClick={onClick} >

                    <User classes="menu__link--icon" /> 
                    about me
                </Link>
            </li>

            
            <li className="menu__item" onClick={onClick}>
                <Link 
                    activeClass="menu__item--active" 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="menu__link" 
                    onClick={onClick} >

                    <Envelope classes="menu__link--icon" />
                    contact me
                </Link>
            </li>

        </ul>
    </nav>
);


export default Menu;