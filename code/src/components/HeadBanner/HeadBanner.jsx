import React from "react";
import { Link } from "react-router-dom";

import bannerImage from "../../assets/staff/logo.jpeg";

import "./HeadBanner.css";

const HeadBanner = () => {
  return (
    <section className="hero container">
      <img
        className="hero__img"
        src={bannerImage}
        alt="Bocca Bocca cartoon logo of dog named Ravioli and owner tossing pizza"
      />
      <h1 className="hero__title">
        Pop up <strong className="chez">pizza</strong> with <br />
        pizzazz!
      </h1>
      <p className="hero__description">
        Hey! Welcome to our website. We're an Orange-County based food pop-up
        striving to bring out the beauty in simple foods, namely pizza. We like
        to hone in and focus on the details of our ingredients and cooking
        method to bring a tasteful product that can't be easily replicated
        elsewhere. In a word-- we never prioritize quantity over quality.
      </p>
        <Link to="/contact" className="hero__btn btn">Reach out</Link>
    </section>
  );
};

export default HeadBanner;
