import { Element } from 'react-scroll';
import illustration from '../assets/mail.svg'
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
    return (
        <Element name="contact" className="contact">
          
            {/* Section Headline */}
            <h2 className="headline headline--primary">Contact Me <span></span></h2>
            
            {/* Contact Info */}
            <div className="contact__container">
                <ContactInfo/>
                <img src={illustration} alt="Illustration" className="contact__illustration"/>
            </div>

        </Element>
    );
}

export default Contact;