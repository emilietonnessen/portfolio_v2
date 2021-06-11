import { primary } from "../../constants/colors";
import { Cross } from './Icons';

interface ModalProps {
    id: string; 
    link: string;
    classes: string;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ( {children, link, id, classes} ) => (
    <div className={`modal ${classes}`} id={id}>
        <div className="modal__content">
            <a href={link} className="modal__close"><Cross color={primary} /> </a>
            {children}
        </div>
    </div>
);


export default Modal;