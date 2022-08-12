import React from "react";
import Footer from "../component/Footer";
import InfoContacUs from "../component/InfoContacUs";

const Contact = () => {
  return (
    <div className="contact flex flex-col justify-between items-center max-w-full">
      <InfoContacUs />
      <Footer />
    </div>
  );
};

export default Contact;
