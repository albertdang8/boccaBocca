import React from "react";

import "../../components/HeadBanner/HeadBanner";
import "./HomePage.css";
import HeadBanner from "../../components/HeadBanner/HeadBanner";
import Work from "../../components/Work/Work";
import HeaderImg from "../../assets/Photos-001/DSC05825.jpg";
import Feature from "../../components/Feature/Feature";

const HomePage = () => {
  return (
    <>
      <HeadBanner />
      <section className="about container section">
        <div className="about__container">
          <h2 className="about__title">Origin</h2>
          <p className="about__description">
            Bocca Bocca pizza started with humble beginnings and big dreams.
            Tommy Beckelheimer started out making pizzas for friends in his
            backyard, trying to better his ingredients and recipes while
            enjoying the community that it brought together. What separates
            Bocca Bocca Pizza from the generic mid-life crisis dads brewing
            beers in their garage, or that one guy that really wants to start a
            podcast with his bros (not that there's anything inherently wrong
            with those things) is that Bocca Bocca isn't just a hobby. It's a
            passion and drive to meet new people, share ideas about food, and to
            grow. Most importantly: it helps pay the bills.{" "}
          </p>
          <p className="about__description">
            Tommy has worked in the service industry for a long time. He's been
            a barista at specialty coffee shops and not-so-specialty coffee
            shops. Then he went on to manage the tasting room at Chapman
            Crafted Brewery. From there he's met and befriended many foodtruck
            cooks, farmers, and bakers.
          </p>
          <p className="about__description">
            Eventually he parted ways with the brewery and took his savings to
            buy the necessities to start a pop up. It was a rough start. But as
            time, input, and ideas progressed, he got excited to keep honing the
            skill. Now he got his own friend to make this website for him!
          </p>
          <hr className="hr" />
          <h3 className="about__subtitle">Why you should book us:</h3>
          <div className="about__ul-container">
            <ul className="about__ul">
              <li className="about__list">
                Great for small to medium sized events.
              </li>
              <li className="about__list">Simple and easy menu</li>
              <li className="about__list">Quality ingredients</li>
            </ul>
            <ul className="about__ul">
              <li className="about__list">
                Options for vegans and vegetarians
              </li>
              <li className="about__list">Fresh and made to order</li>
              <li className="about__list">Killer smiles</li>
            </ul>
          </div>
        </div>
        <div className="about__img-wrapper">
          <img src={HeaderImg} alt="" className="about__img" />
        </div>
      </section>
      <Feature />
      <Work />
    </>
  );
};

export default HomePage;
