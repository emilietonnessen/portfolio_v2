import Button from "./UI/Button";


const Form = () => {
    return (
        <form className="contact-form">
            <input className="contact-form__input" type="text" placeholder="Kari Nordman"/>

            <input className="contact-form__input" type="text" placeholder="kari@nordman.no"/>

            <input className="contact-form__input" type="text" placeholder="Topic"/>

            <textarea className="contact-form__textarea" name="message" id="message" placeholder="Your Message.."></textarea>

            <Button type="submit" link="#contact">send</Button>
        </form>
    );
}

export default Form;