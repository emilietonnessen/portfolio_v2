import H2 from 'components/Typography/H2';
import AboutMe from 'features/AboutMe/AboutMe';
import Development from 'features/Technologies/Development';
import { Element } from 'react-scroll';

const AboutPage = () => (
  <Element name="about" className="about">
    <H2 title="About me" />

    <AboutMe />
    <Development />
  </Element>
);

export default AboutPage;
