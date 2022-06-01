import { useRef, useState } from 'react';
import Hero from 'features/Hero/Hero';
import Header from 'features/Layout/Header';
import Contact from 'features/Contact/Contact';
import Projects from 'features/Projects/Projects';

export enum ActiveSection {
  Hero = 'hero',
  Portfolio = 'portfolio',
  About = 'about',
  Contact = 'contact',
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | undefined>('');

  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  return (
    <div className="app">
      <Header
        aboutRef={aboutRef}
        activeSection={activeSection}
        contactRef={contactRef}
        heroRef={heroRef}
        portfolioRef={portfolioRef}
        setActiveSection={setActiveSection}
      />

      <main>
        <Hero scrollRef={heroRef} />
        <Projects scrollRef={portfolioRef} />
        <section className="section">Courses</section>
        <section className="section section--dark-background">
          Technologies
        </section>
        <section id={ActiveSection.About} ref={aboutRef} className="section">
          About me
        </section>
        <section
          id={ActiveSection.Contact}
          ref={contactRef}
          className="section section--dark-background"
        >
          <Contact />
        </section>
      </main>
      <footer>Copyright</footer>
    </div>
  );
};

export default App;
