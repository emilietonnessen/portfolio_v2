import logo from '../../../assets/logo.png';

const Brand = () => {
    return (
        <a href="#landingpage" className="brand">
            <img src={logo} alt="Logo " className="brand__logo"/>
        </a>
    );
}

export default Brand;