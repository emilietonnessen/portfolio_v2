import { useState } from 'react';
import Brand from './Brand';
import HamburgerIcon from './HamburgerIcon';
import Menu from './Menu';
import SocialMedia from './SocialMedia';


const Navigation: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    const checkedHandler = () => {
        if (checked === false) setChecked(true);
        if (checked === true) setChecked(false);
    }

    const onChangeHandler = () => {
        return;
    }

    return (
        <nav className="navigation">

            <Brand />

            <HamburgerIcon  checked={checked} onChange={onChangeHandler} onClick={checkedHandler}/> 

            <Menu onClick={checkedHandler} />

            <SocialMedia />
    
        </nav>
    );
}

export default Navigation;