import React from "react";
import "./StaffCard.css";

const StaffCard = () => {

  return (
    <div className="staff-container">
      <div className="staff-card">
        <div className="img" />
        <div className="staff-details">
          <h2 className="staff-name">Tommy Beckelheimer</h2>
          <p>
            <strong>Favorite Movie:</strong> That Thing You Do
          </p>
          <p>
            <strong>Favorite Music:</strong> Oso Oso, Dua Lipa, Spoon
          </p>
          <p>
            <strong>Top Foods:</strong> Oysters, Anything Italian/Mediterranean
          </p>
          <p>
            <strong>Quirk:</strong> Every dog reminds me of mine
          </p>
        </div>
      </div>
      <div className="staff-card">
        <div className="img-dog" />
        <div className="staff-details">
          <h2 className="staff-name">Ravioli</h2>
          <p>
            <strong>Favorite Movie:</strong> Airbud
          </p>
          <p>
            <strong>Favorite Music:</strong> Botch, Cake, Dua Lipa, Feist
          </p>
          <p>
            <strong>Top Foods:</strong> Mine own asshole
          </p>
          <p>
            <strong>Quirk:</strong> I poopie on floor lol
          </p>
        </div>
      </div>
      <div className="staff-card">
        <div className="img-bert" />
        <div className="staff-details">
          <h2 className="staff-name">Albert</h2>
          <p>
            <strong>Favorite Movie:</strong> Casablanca
          </p>
          <p>
            <strong>Favorite Music:</strong> Botch, Cake, Dua Lipa, Feist
          </p>
          <p>
            <strong>Top Foods:</strong> Hotdogs, Foie gras, Chinese, Chicken McNuggets, Chalupa
          </p>
          <p>
            <strong>Quirk:</strong> I'm the piece of shit that made this website.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default StaffCard;
