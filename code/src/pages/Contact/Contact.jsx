import React from "react";

import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"
import "./Contact.css";

const Contact = () => {
  return (
    <div className="center">
      <div className="overlay"></div>
      <div className="contact-banner center">
        Looking to book an event or location with us? Have questions about pricing or availability? Feel free to contact us at:
        BoccaBoccaPizza@gmail.com. 
        <BiLogoGmail size={36} />
        <FaInstagram  size={30} /> 
      </div>
    </div>
  );
};

export default Contact;
