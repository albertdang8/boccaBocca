import React from "react";

import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact container">
      <h2 className="contact__title">Get In Contact</h2>
      <p className="contact__description">
        Whether you are new to us, have event inquiries or just want to say hi,
        our inbox is always open, so feel free to reach out and we will get back
        to you as soon as possible.
      </p>
      <a href="mailto:BoccaBoccaPizza@gmail.com" className="contact__btn btn" target="_blank">
        Reach Out
      </a>
    </section>
  );
};

export default Contact;