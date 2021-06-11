import logo from '../assets/logo.png';
import emilie1 from '../assets/emilie-1-2.jpg'
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
    return (
        <header className="hero">

            {/* Text Content */}
            <div className="hero__copywrite">
                <h1 className="hero__headline">Emilie Tønnessen</h1>
                <h2 className="hero__job-title">Junior Frontend Developer</h2>
                <p className="hero__text">I implement visual and interactive elements to websites and applications. I make your design come alive!</p>
                <Link to="portfolio" spy={true} smooth={true} duration={500}>
                    <button className="btn btn--primary btn--cta">View my portfolio</button>
                </Link>
                
            </div>


            {/* Logo */}
            <img src={logo} alt="Logo" className="hero__img hero__logo"/>
            

            {/* Graphic Content */}
            <div className="profile hero__graphics">
                <img src={emilie1} alt="Profile of Emilie Tonnessen" className="hero__profile-image"/>
            </div>
            
            
        </header>
    );
}

export default Hero;