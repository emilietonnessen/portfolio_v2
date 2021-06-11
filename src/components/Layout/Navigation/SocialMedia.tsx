import { Github, Linkedin } from "../../UI/Icons";

const SocialMedia: React.FC = () => (
    <div className="so-me">
        <a href="https://github.com/emilietonnessen" className="so-me__link" target="_blank" rel="noreferrer">
            <Github color="currentColor" classes="so-me__icon" />
        </a>
        <a href="https://www.linkedin.com/in/emilie-henriette-t%C3%B8nnessen-19a850191/" className="so-me__link" target="_blank" rel="noreferrer">
            <Linkedin color="currentColor" classes="so-me__icon" />
        </a>
    </div>
);


export default SocialMedia;