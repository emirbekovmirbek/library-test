import React from 'react';
import './modal.scss'
type PropsType = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const Modal: React.FC<PropsType> = ({children, isOpen,onClose}) => {
  return (
    <div className={`modal ${isOpen && 'modal--open'}`}>
      <div className="modal__close" onClick={onClose}/>
      <div className="modal__bg" onClick={onClose}/>
      <div className="modal__wrapper">
        {children}
      </div>
    </div>
  );
};
export default Modal
