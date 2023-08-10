import React from "react";

import "./About.css";

const About = () => {
  return (
    <div>
      <div className="staff-container">
        <h2 className="about-title">Meet the team</h2>
        <div className="staff">Tommy Beckelheimer</div>-
        <div className="staff">Ravioli</div>-
        <div className="staff">Evan</div>-
        <div className="staff">Jacob</div>-
        <div className="staff">Bobby</div>-
        <div className="staff">Albert</div>-
        <div>Looking to join the team? Well, don't.</div>
      </div>-
      <div className="special-thanks">
      <div className="artist">Preemo</div>
      <div className="artist">A-frame</div>
      <div className="artist">Photographers</div>
      <div className="artist">Merch</div>
      </div>
    </div>
  );
};

export default About;
