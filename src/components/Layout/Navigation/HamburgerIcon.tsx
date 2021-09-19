import { NavigationHamburgerIconProps } from 'interfaces/interfaces';

const HamburgerIcon: React.FC<NavigationHamburgerIconProps> = ({
  onClick,
  checked,
  onChange,
}) => {
  return (
    <>
      <input
        type="checkbox"
        className="menu__checkbox"
        id="navi-toggle"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="navi-toggle" className="menu__button" onClick={onClick}>
        <span className="menu__icon menu__icon--1">&nbsp;</span>
        <span className="menu__icon menu__icon--2">&nbsp;</span>
        <span className="menu__icon menu__icon--3">&nbsp;</span>
        <span className="menu__icon menu__icon--4">&nbsp;</span>
      </label>
      {/* <div className="menu__background">&nbsp;</div> */}
    </>
  );
};

export default HamburgerIcon;
