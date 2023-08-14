import React from "react";

import bannerImage from "../../assets/Photos-001/DSC05910.jpg"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="banner-container">
          <div className="banner">
            <img src={bannerImage} alt="Banner" />
          </div>
        <div className="overlay">
        </div>
      </div>

    </div>
  );
};

export default HomePage;
