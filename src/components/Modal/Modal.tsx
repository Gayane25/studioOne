import { FC } from 'react';
import { useStyles } from './Modal.styles';

interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.modalOverlay}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
    // </div>
  );
};

export default Modal;
