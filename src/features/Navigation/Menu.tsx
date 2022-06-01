import { Envelope, Portfolio, User } from 'components/Icon/Icon';
import { NavigationMenuProps } from 'features/Layout/layout.types';

const Menu = ({ onClick }: NavigationMenuProps) => (
  <nav className="menu">
    {/* List */}
    <ul className="menu__list">
      <li className="menu__item" onClick={onClick}>
        <button className="menu__link" onClick={onClick}>
          <Portfolio classes="menu__link--icon" />
          Portfolio
        </button>
      </li>

      <li className="menu__item" onClick={onClick}>
        <button className="menu__link" onClick={onClick}>
          <User classes="menu__link--icon" />
          about me
        </button>
      </li>

      <li className="menu__item" onClick={onClick}>
        <button onClick={onClick}>
          <Envelope classes="menu__link--icon" />
          contact me
        </button>
      </li>
    </ul>
  </nav>
);

export default Menu;
