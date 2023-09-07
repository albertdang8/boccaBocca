import React from "react";
import img1 from "../../assets/Photos-001/DSC00062.jpg";
import img2 from "../../assets/Photos-001/DSC00073.jpg";
import img3 from "../../assets/Photos-001/DSC00108.jpg";
import img4 from "../../assets/Photos-001/DSC00113.jpg";
import img5 from "../../assets/Photos-001/DSC05777.jpg";
import img6 from "../../assets/Photos-001/DSC05787.jpg";
import img7 from "../../assets/Photos-001/DSC05788.jpg";
import img8 from "../../assets/Photos-001/DSC05789.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section>
      <div className="featured__wrapper">
        <img src={img1} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img2} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img3} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img4} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img5} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img6} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img7} alt="" />
      </div>
      <div className="featured__wrapper">
        <img src={img8} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
