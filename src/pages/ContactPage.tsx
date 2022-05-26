import { Element } from 'react-scroll';
import illustration from 'components/Icon/svgs/mail.svg';
import ContactInfo from 'features/Contact/ContactInfo';

const ContactPage = () => {
  return (
    <Element name="contact" className="contact">
      {/* Section Headline */}
      <h2 className="headline headline--primary">
        Contact Me <span></span>
      </h2>

      {/* Contact Info */}
      <div className="contact__container">
        <ContactInfo />
        <img
          src={illustration}
          alt="Illustration"
          className="contact__illustration"
        />
      </div>
    </Element>
  );
};

export default ContactPage;
