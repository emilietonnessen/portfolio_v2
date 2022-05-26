import { ReactNode } from 'react';
import { Cross } from 'components/Icon/Icon';
import { primary } from 'features/Layout/colors';

interface ModalProps {
  id: string;
  link: string;
  classes: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, link, id, classes }) => (
  <div className={`modal ${classes}`} id={id}>
    <div className="modal__content">
      <a href={link} className="modal__close">
        <Cross color={primary} />{' '}
      </a>
      {children}
    </div>
  </div>
);

export default Modal;
