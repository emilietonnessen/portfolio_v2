import Brand from 'features/Navigation/Brand';
import HamburgerIcon from 'features/Navigation/HamburgerIcon';
import Menu from 'features/Navigation/Menu';
import SocialMedia from 'features/Navigation/SocialMedia';
import { useState } from 'react';

const Navigation = () => {
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
