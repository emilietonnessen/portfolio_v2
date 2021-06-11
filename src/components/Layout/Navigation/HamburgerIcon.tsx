import { NavigationHamburgerIconProps } from '../../../constants/interfaces'

const HamburgerIcon: React.FC<NavigationHamburgerIconProps> = ({onClick, checked, onChange}) => {
    return (
        <>
            <input type="checkbox" className="menu__checkbox" id="navi-toggle" checked={checked} onChange={onChange} />
            <label htmlFor="navi-toggle" className="menu__button" onClick={onClick}>
                <span className="menu__icon">&nbsp;</span>
            </label>
            <div className="menu__background">&nbsp;</div>
        </>
    );
}

export default HamburgerIcon;