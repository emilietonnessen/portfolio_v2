import { Envelope, Github, Linkedin } from "./UI/Icons"

const ContactInfo: React.FC = () => {
    return (
        <div className="contact-info">
            <div className="contact-info__box">
                
                <a  className="contact-info__link" href="mailto:emilie@tonnessen.com">
                    <Envelope classes="contact-info__icon"  /> 
                    emilie@tonnessen.com
                </a>
            </div>
            <div className="contact-info__box">
                
                <a href="https://www.linkedin.com/in/emilie-henriette-t%C3%B8nnessen-19a850191/" className="contact-info__link" target="_blank" rel="noreferrer">
                    <Linkedin classes="contact-info__icon"  /> 
                    Linkedin Profile
                </a>
            
            
            </div>

            <div className="contact-info__box">
                <a href="https://github.com/emilietonnessen" className="contact-info__link" target="_blank" rel="noreferrer">
                    <Github classes="contact-info__icon"  /> 
                    GitHub Profile
                </a>
            </div>
             
             
                         
        </div>
    );
}

export default ContactInfo
