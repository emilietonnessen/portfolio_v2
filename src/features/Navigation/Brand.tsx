import { Link } from 'react-scroll';
import logo from 'features/Navigation/assets/logo.png';

const Brand = () => (
  <Link
    to="landingpage"
    spy={true}
    smooth={true}
    duration={500}
    className="brand"
  >
    <img src={logo} alt="Logo " className="brand__logo" />
  </Link>
);

export default Brand;
