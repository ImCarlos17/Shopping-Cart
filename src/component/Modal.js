import React from "react";
import "./Modal.css";

const Modal = ({ children, visible, onClose }) => {
  return (
    visible && (
      <div onClick={onClose} className="modal">
        {children}
      </div>
    )
  );
};

export default Modal;
