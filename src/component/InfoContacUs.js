import React from "react";
import gitHubSvg from "../static/icons/icon-gitHub.svg";
import facebookSvg from "../static/icons/icon-facebook.svg";
import twitterSvg from "../static/icons/icon-twitter.svg";
import instagramSvg from "../static/icons/icon-instagram.svg";
import ContactIcon from "./ContactIcon";

const InfoContacUs = () => {
  return (
    <div className="infoContactUs flex h-60 items-center mt-60 border-black border-2 rounded-lg ">
      <div>
        <ContactIcon
          img={gitHubSvg}
          href={"https://github.com/ImCarlos17?tab=repositories"}
        />
      </div>

      <ContactIcon img={facebookSvg} />
      <ContactIcon img={twitterSvg} />
      <ContactIcon img={instagramSvg} />
    </div>
  );
};

export default InfoContacUs;
