import React from "react";
import "./StaffCard.css";

const StaffCard = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Our Staff</h1>
        <p className="summary">
          We believe in giving credit where credit is due. Here, you'll see some
          of the faces of the friends and workers who have helped us become what
          we are today.
        </p>
      </div>
      <div className="sub-container">
        <div className="teams">
          <div className="tommy" />
          <div className="name">Tommy Beckelheimer</div>
          <div className="desig">Top Cook Man</div>
          <div className="about">
            <p>
              <strong>Favorite Movie:</strong> <br /> That Thing You Do
            </p>
            <p>
              <strong>Favorite Music:</strong> <br /> Oso Oso, Dua Lipa, Spoon
            </p>
            <p>
              <strong>Top Foods:</strong> <br /> Oysters, Anything
              Italian/Mediterranean
            </p>
            <p>
              <strong>Quirk:</strong> <br /> Every dog reminds me of mine
            </p>
          </div>
        </div>

        <div className="teams">
          <div className="ravioli" />
          <div className="name">Ravioli Beckelheimer</div>
          <div className="desig">Family Specialist Dog-ctor</div>
          <div className="about">
            <p>
              <strong>Favorite Movie:</strong> <br /> Airbud
            </p>
            <p>
              <strong>Favorite Music:</strong> <br /> Baha Men, Johann Sebastian
              Bark
            </p>
            <p>
              <strong>Top Foods:</strong> <br /> Mine own asshole
            </p>
            <p>
              <strong>Quirk:</strong> <br /> I make the poopie on floor lol
            </p>
          </div>
        </div>

        <div className="teams">
          <div className="bert profile-pic" />
          <div className="name">Albert</div>
          <div className="desig">Edge Lord</div>
          <div className="about">
            <p>
              <strong>Favorite Movie:</strong> <br /> Casablanca
            </p>
            <p>
              <strong>Favorite Music:</strong> <br /> Botch, Dua Lipa, Feist
            </p>
            <p>
              <strong>Top Foods:</strong> <br /> Hotdogs, Foie Gras, Chicken
              McNuggets, Chalupas
            </p>
            <p>
              <strong>Quirk:</strong> <br /> I'm the shit-bag that made this
              site
            </p>
          </div>
        </div>

        {/* <div className="teams">
          <div className="tommy" />
          <div className="name">Tommy Beckelheimer</div>
          <div className="desig">Top Cook Man</div>
          <div className="about">
            <p>
              <strong>Favorite Movie:</strong> <br /> That Thing You Do
            </p>
            <p>
              <strong>Favorite Music:</strong> <br /> Oso Oso, Dua Lipa, Spoon
            </p>
            <p>
              <strong>Top Foods:</strong> <br /> Oysters, Anything
              Italian/Mediterranean
            </p>
            <p>
              <strong>Quirk:</strong> <br /> Every dog reminds me of mine
            </p>
          </div>
        </div>
        <div className="teams">
          <div className="tommy" />
          <div className="name">Tommy Beckelheimer</div>
          <div className="desig">Top Cook Man</div>
          <div className="about">
            <p>
              <strong>Favorite Movie:</strong> <br /> That Thing You Do
            </p>
            <p>
              <strong>Favorite Music:</strong> <br /> Oso Oso, Dua Lipa, Spoon
            </p>
            <p>
              <strong>Top Foods:</strong> <br /> Oysters, Anything
              Italian/Mediterranean
            </p>
            <p>
              <strong>Quirk:</strong> <br /> Every dog reminds me of mine
            </p>
          </div>
        </div> */}
      </div>

      <div className="header">
        <h1>The Artists</h1>
      </div>
      <div className="sub-container">
        <div className="teams">
          <div className="preemo" />
          <div className="name">Priscilla Moreno</div>
          <div className="desig">Logo Artist</div>
          <div className="about">
            <p>
              <strong>About:</strong> <br /> Priscilla is the designer of our
              logo. Her work has been featured all over the Orange County/Los
              Angeles area and continues to spread life and wonderment wherever
              she may be.
            </p>
            <p>
              <strong>Site:</strong> <br />{" "}
              <a className="site-link" href="https://www.priscillamoreno.com/">
                https://www.priscillamoreno.com/
              </a>
            </p>
            <p>
              <strong>Email:</strong> <br /> hi@priscillamoreno.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
