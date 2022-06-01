import illustration from 'components/Icon/svgs/mail.svg';
import ContactInfo from 'features/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="headline headline--primary">
        Contact Me <span></span>
      </h2>
      <div className="contact__container">
        <ContactInfo />
        <img
          src={illustration}
          alt="Illustration"
          className="contact__illustration"
        />
      </div>
    </div>
  );
};

export default Contact;
