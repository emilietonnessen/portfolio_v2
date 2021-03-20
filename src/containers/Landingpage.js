import logo from '../assets/logo.png';
import emilie1 from '../assets/emilie-1-2.jpg'
import Button from '../components/UI/Button';

const Landingpage = () => {
    return (
        <div id="landingpage" className="landingpage">

            <div className="hero">
                <h1 className="hero__headline">
                    Emilie Tønnessen
                </h1>
                <h2 className="hero__job-title">Junior Frontend Developer</h2>
                <p className="hero__text">
                    I implement visual and interactive elements to websites and applications. I make your design come alive!
                </p>
                <Button link="#portfolio">
                    View my portfolio
                </Button>
            </div>

            <div className="profile">
                <img src={emilie1} alt="Profile of Emilie Tonnessen" className="profile__img profile__img--emilie"/>
                <img src={logo} alt="Logo" className="profile__img profile__img--logo"/>
            </div>

            
        </div>
    );
}

export default Landingpage;