import { useState } from 'react';
import HamburgerIcon from 'components/Layout/Navigation/HamburgerIcon';
import Menu from 'components/Layout/Navigation/Menu';
import SocialMedia from 'components/Layout/Navigation/SocialMedia';
import ThemeToggler from './ThemeToggle';
import Brand from 'components/Layout/Navigation/Brand';

const Navigation: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const checkedHandler = () => {
    if (checked === false) setChecked(true);
    if (checked === true) setChecked(false);
  };

  const onChangeHandler = () => {
    return;
  };

  return (
    <nav className="navigation">
      <ThemeToggler />

      <Brand />

      <HamburgerIcon
        checked={checked}
        onChange={onChangeHandler}
        onClick={checkedHandler}
      />

      <Menu onClick={checkedHandler} />

      <SocialMedia />
    </nav>
  );
};

export default Navigation;
