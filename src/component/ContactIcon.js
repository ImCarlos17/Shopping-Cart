import React from "react";

const ContactIcon = ({
  img,
  href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}) => {
  return (
    <div className="px-12">
      <a href={href} target="_blank">
        <img src={img} className="w-32 hover:w-36" />
      </a>
    </div>
  );
};

export default ContactIcon;
