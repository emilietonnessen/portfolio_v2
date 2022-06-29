import { ActiveSection } from 'App';
import image from 'features/Hero/assets/web-developer.svg';
import { RefObject } from 'react';

interface HeroProps {
  scrollRef: RefObject<HTMLElement>;
  portfolioRef: RefObject<HTMLElement>;
  setActiveSection: any;
}

const Hero = ({ scrollRef, portfolioRef, setActiveSection }: HeroProps) => {
  const executeScroll = (ref: RefObject<HTMLElement>) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
    });

    setActiveSection(ref?.current?.id);
  };

  return (
    <section id={ActiveSection.Hero} ref={scrollRef} className="section hero">
      <img
        src={image}
        alt="Profile of Emilie Tonnessen"
        className="hero__image"
      />
      <div className="hero__copywrite">
        <h1 className="hero__headline">Emilie Tønnessen</h1>
        <h2 className="hero__job-title">Frontend Developer</h2>
        <p className="hero__text">
          I implement visual and interactive elements to websites and
          applications. I make your design come alive!
        </p>
        <button
          onClick={() => executeScroll(portfolioRef)}
          className="btn btn--primary btn--cta"
        >
          View my portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;
