import Hero from 'features/Hero/Hero';
import { Element } from 'react-scroll';

const LandingPage = () => (
  <Element name="landingpage" className="landingpage">
    <Hero />
  </Element>
);

export default LandingPage;
