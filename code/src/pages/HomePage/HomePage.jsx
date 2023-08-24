import React from "react";

import '../../components/HeadBanner/HeadBanner'
import "./HomePage.css";
import HeadBanner from "../../components/HeadBanner/HeadBanner";

const HomePage = () => {
  return (
    <div>
      <div className="banner-container">
        <HeadBanner/>
      </div>
    </div>
  );
};

export default HomePage;
