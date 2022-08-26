import React from "react";
import "./Modal.css";

const Modal = ({ children, visible }) => {
  return (
    visible && (
      <div className="relative top-0">
        <div className="modal">{children}</div>
      </div>
    )
  );
};

export default Modal;
