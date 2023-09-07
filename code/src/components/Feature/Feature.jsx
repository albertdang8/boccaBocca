import React from "react";
import { GiPizzaSlice } from "react-icons/gi";
import img1 from "../../assets/Photos-001/DSC00062.jpg";
import img2 from "../../assets/Photos-001/DSC00073.jpg";
import img3 from "../../assets/Photos-001/DSC00108.jpg";
import img4 from "../../assets/Photos-001/DSC00113.jpg";
import img5 from "../../assets/Photos-001/DSC05777.jpg";
import img6 from "../../assets/Photos-001/DSC05787.jpg";
import img7 from "../../assets/Photos-001/DSC05788.jpg";
import img8 from "../../assets/Photos-001/DSC05789.jpg";

import "./Feature.css";

const Feature = () => {
  return (
    <section className="featured container section">
      <h3 className="featured__subtitle">Features</h3>
      <div className="featured__wrapper">
        <h2 className="featured__title">Title</h2>
        <GiPizzaSlice className="featured__link" />
      </div>
      <p className="featured__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Et sollicitudin ac
        orci phasellus egestas tellus rutrum tellus. Fringilla ut morbi
        tincidunt augue interdum velit euismod in.
      </p>
      <div className="featured__info-container">
        <div>
          <h3 className="featured__label">Cake Thicc</h3>
          <ul className="featured__stack">
            <li className="featured__info">Flour</li>
            <li className="featured__info">Dough</li>
            <li className="featured__info">Sauce</li>
            <li className="featured__info">Chez</li>
            <li className="featured__info">Salami</li>
            <li className="featured__info">Serranos</li>
          </ul>
        </div>
        <div>
          <h3 className="featured__label">Hot Chip</h3>
          <p className="featured__info">Fire oven go brrrr haha</p>
        </div>
        <div>
          <h3 className="featured__label">Eat Ass</h3>
          <p className="featured__info">omnomnomnom</p>
        </div>
      </div>
      <div className="featured__img-container">
        <div className="featured__img-wrapper">
          <img src={img1} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img2} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img3} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img4} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img5} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img6} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img7} alt="" />
        </div>
        <div className="featured__img-wrapper">
          <img src={img8} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
