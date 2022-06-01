import { useRef } from 'react';

const LandingPage = () => {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main>
      <section ref={heroRef} className="section"></section>

      <section ref={portfolioRef} className="section section--dark-background">
        Projects
      </section>
      <section className="section">Courses</section>
      <section className="section section--dark-background">
        Technologies
      </section>
      <section ref={aboutRef} className="section">
        About me
      </section>
      <section ref={contactRef} className="section section--dark-background">
        Contact me
      </section>
    </main>
  );
};

export default LandingPage;
