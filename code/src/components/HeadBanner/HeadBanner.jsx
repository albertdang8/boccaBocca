import React from "react";

import bannerImage from "../../assets/staff/logo.jpeg";

import "./HeadBanner.css";

const HeadBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <h1>Pop up <span className="chez">pizza</span> with pizzazz!</h1>
        <p className="banner-p">Hey! Welcome to our website. We're an Orange-County based food pop-up striving to bring out the beauty in simple foods, namely pizza. We like to hone in and focus on the details of our ingredients and cooking method to bring a tasteful product that can't be easily replicated elsewhere. In a word, we never prioritize quantity over quality.</p>
      </div>
      <div className="banner-right">
        <img
          className="logo"
          src={bannerImage}
          alt="Bocca Bocca cartoon logo of dog named Ravioli and owner Tommy Beckelheimer"
        />
      </div>
    </div>
  );
};

export default HeadBanner;
