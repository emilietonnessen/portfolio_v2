import Button from './UI/Button';

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero__headline">
                Emilie Tønnessen
            </h1>
            <h2 className="hero__job-title">Junior Frontend Developer</h2>
            <p className="hero__text">
                I implement visual and interactive elements to websites and applications. I make your design come alive!
            </p>
            <Button link="#portfolio">
                View my portfolio
            </Button>
        </div>
    );
}

export default Hero;