import logo from '../assets/logo.png';
import emilie1 from '../assets/emilie-1-2.jpg'
import Hero from '../components/Hero';

const Landingpage = () => {
    return (
        <div id="landingpage" className="landingpage">
            <Hero />
            <div className="profile">
                <img src={emilie1} alt="Profile of Emilie Tonnessen" className="profile__img profile__img--emilie"/>
                <img src={logo} alt="Logo" className="profile__img profile__img--logo"/>
            </div>
        </div>
    );
}

export default Landingpage;