import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";

const Portal = ({ children }) => {
  const portalNode = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(portalNode);

    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return ReactDOM.createPortal(children, portalNode);
};

export default Portal;
