
interface HeroProps {
    headline: string;
    jobTitle: string;
    children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({headline, jobTitle, children}) => {
