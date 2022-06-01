import H2 from 'components/Typography/H2';
import AboutMe from 'features/AboutMe/AboutMe';
import Experience from 'features/Experience/Experience';
import Development from 'features/Technologies/Development';

const AboutPage = () => (
  <div className="about">
    <H2 title="About me" />
    <AboutMe />
    <Experience />
    <Development />
  </div>
);

export default AboutPage;
