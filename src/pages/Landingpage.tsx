import logo from '../assets/logo.png';
import emilie1 from '../assets/emilie-1-2.jpg'
import Hero from '../components/Hero';
import { useEffect } from 'react';

const Landingpage: React.FC = () => {
    // Notify the user that there might be errors
    /* useEffect(() => {
        alert('This website is under construction and might not work properly')
    }, []) */

    return (
        <section id="landingpage" className="landingpage">
            <Hero headline="Emilie Tønnessen" jobTitle="Junior Frontend Developer">
                I implement visual and interactive elements to websites and applications. I make your design come alive!
            </Hero>
            <div className="profile">
                <img src={emilie1} alt="Profile of Emilie Tonnessen" className="profile__img profile__img--emilie"/>
                <img src={logo} alt="Logo" className="profile__img profile__img--logo"/>
            </div>
        </section>
    );
}

export default Landingpage;