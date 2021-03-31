import Button from "./UI/Button"

interface ModalProps {
    headline: string;
    github: string;
    download?: boolean;
    link: string;
}

const Modal: React.FC<ModalProps> = ({headline, github, download, link}) => {
    return (
        <div className="modal">
            <div className="modal__box">
                <h4 className="modal__headline">{headline}</h4>
                <div className="modal__cross">
                    <i className="fal fa-times"></i>
                </div>
                
                <div className="modal__buttons">
                    <Button link={github} download={false}>
                        GitHub
                    </Button>
                    <Button link={link} download={false}>
                        Live demo
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default Modal;