import { ActiveSection } from 'App';
import { Envelope, Home, Portfolio, User } from 'components/Icon/Icon';
import { Dispatch, RefObject } from 'react';

type HeaderProps = {
  aboutRef: RefObject<HTMLElement>;
  activeSection: string | undefined;
  contactRef: RefObject<HTMLElement>;
  heroRef: RefObject<HTMLElement>;
  portfolioRef: RefObject<HTMLElement>;
  setActiveSection: Dispatch<React.SetStateAction<string | undefined>>;
};

const Header = ({
  aboutRef,
  activeSection,
  contactRef,
  heroRef,
  portfolioRef,
  setActiveSection,
}: HeaderProps) => {
  const executeScroll = (ref: RefObject<HTMLElement>) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
    });

    setActiveSection(ref?.current?.id);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <button
              className={`header__button ${
                activeSection === ActiveSection.Hero
                  ? 'header__button--active'
                  : ''
              }`}
              onClick={() => executeScroll(heroRef)}
            >
              <Home classes="header__icon" />
              Home
            </button>
          </li>
          <span className="header__divider" />
          <li>
            <button
              onClick={() => executeScroll(portfolioRef)}
              className={`header__button ${
                activeSection === ActiveSection.Portfolio
                  ? 'header__button--active'
                  : ''
              }`}
            >
              <Portfolio classes="header__icon" />
              Portfolio
            </button>
          </li>
          <span className="header__divider" />
          <li>
            <button
              onClick={() => executeScroll(aboutRef)}
              className={`header__button ${
                activeSection === ActiveSection.About
                  ? 'header__button--active'
                  : ''
              }`}
            >
              <User classes="header__icon" />
              About me
            </button>
          </li>
          <span className="header__divider" />
          <li>
            <button
              onClick={() => executeScroll(contactRef)}
              className={`header__button ${
                activeSection === ActiveSection.Contact
                  ? 'header__button--active'
                  : ''
              }`}
            >
              <Envelope classes="header__icon" />
              Contact me
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
