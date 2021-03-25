
import AboutMe from '../components/AboutMe';
import Development from '../components/Development/Development';

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="headline headline--primary">About Me <span></span></h2>
            <AboutMe />
            <Development />
        </div>
    )
}

export default About;