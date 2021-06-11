
import { Element } from 'react-scroll';
import AboutMe from '../components/AboutMe';
import Development from '../components/Development/Development';

const About: React.FC = () => (
    <Element name="about" className="about">
        <h2 className="headline headline--primary">About Me <span></span></h2>
        
        <AboutMe />
        <Development />
    </Element>
);


export default About;