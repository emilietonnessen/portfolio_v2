import { NavigationHamburgerIconProps } from 'features/Navigation/navigation.types';

const HamburgerIcon = ({
  onClick,
  checked,
  onChange,
}: NavigationHamburgerIconProps) => {
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
        <span className="menu__icon">&nbsp;</span>
      </label>
      <div className="menu__background">&nbsp;</div>
    </>
  );
};

export default HamburgerIcon;
