import illustration from '../assets/mail.svg'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2 className="headline headline--primary">Contact Me <span></span></h2>
            
            <div className="contact__box">

                <Form />
                <div className="illustration">
                    <img src={illustration} alt="Illustration" className="illustration__img"/>
                </div>

            </div>
        </div>
    );
}

export default Contact;