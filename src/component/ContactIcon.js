import React from "react";

const ContactIcon = ({
  img,
  href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}) => {
  return (
    <div className="px-5">
      <a href={href} target="_blank">
        <img src={img} className="w-36 hover:w-40" />
      </a>
    </div>
  );
};

export default ContactIcon;
