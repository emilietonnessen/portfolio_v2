import { Envelope, Portfolio, User } from 'components/Icon/Icon';
import { NavigationMenuProps } from 'features/Layout/layout.types';
import { Link } from 'react-scroll';

const Menu = ({ onClick }: NavigationMenuProps) => (
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
          onClick={onClick}
        >
          <Portfolio classes="menu__link--icon" />
          Portfolio
        </Link>
      </li>

      <li className="menu__item" onClick={onClick}>
        <Link
          activeClass="menu__item--active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="menu__link"
          onClick={onClick}
        >
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
          onClick={onClick}
        >
          <Envelope classes="menu__link--icon" />
          contact me
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
