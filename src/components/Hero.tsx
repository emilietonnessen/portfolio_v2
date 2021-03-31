import Button from './UI/Button';

interface HeroProps {
    headline: string;
    jobTitle: string;
    children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({headline, jobTitle, children}) => {
    return (
        <div className="hero">
            <h1 className="hero__headline">{headline}</h1>
            <h2 className="hero__job-title">{jobTitle}</h2>
            <p className="hero__text">{children}</p>
            <Button link="#portfolio">View my portfolio</Button>
        </div>
    );
}

export default Hero;