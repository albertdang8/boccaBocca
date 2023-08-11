import React from "react";

const StaffCard = () => {
  const notApiJSON = [
    {
      name: "Tommy Beckelheimer",
      img: "../../assets/staff/Tommy.jpg",
      favMovie: "That Thing You Do",
      favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
      topFoods: ["Oysters", "Anything Italian/Mediterranean"],
      quirk: "Every dog reminds me of mine",
    },
    // {
    //   name: "Ravioli",
    //   img: "../../assets/staff/DCS05819.jpg",
    //   favMovie: "That Thing You Do",
    //   favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
    //   topFoods: ["Oysters", "Anything Italian/Mediterranean"],
    //   quirk: "Every dog reminds me of mine",
    // },
    // {
    //   name: "Evan",
    //   img: "../../assets/staff/DCS05819.jpg",
    //   favMovie: "That Thing You Do",
    //   favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
    //   topFoods: ["Oysters", "Anything Italian/Mediterranean"],
    //   quirk: "Every dog reminds me of mine",
    // },
    // {
    //   name: "Jacob",
    //   img: "../../assets/staff/DCS05819.jpg",
    //   favMovie: "That Thing You Do",
    //   favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
    //   topFoods: ["Oysters", "Anything Italian/Mediterranean"],
    //   quirk: "Every dog reminds me of mine",
    // },
    // {
    //   name: "Bobby",
    //   img: "../../assets/staff/DCS05819.jpg",
    //   favMovie: "That Thing You Do",
    //   favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
    //   topFoods: ["Oysters", "Anything Italian/Mediterranean"],
    //   quirk: "Every dog reminds me of mine",
    // },
    // {
    //   name: "Albert",
    //   img: "../../assets/staff/DCS05819.jpg",
    //   favMovie: "That Thing You Do",
    //   favMusic: ["Oso Oso", "Dua Lipa", "Spoon"],
    //   topFoods: ["Oysters", "Anything Italian/Mediterranean"],
    //   quirk: "Every dog reminds me of mine",
    // },
  ];

  return (
    <div>
      {notApiJSON.map((item, index) => (
        <div key={index} className="staff-card">
          <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} className="staff-image" />
          <div className="staff-details">
            <p>
              <strong>Favorite Movie:</strong> {item.favMovie}
            </p>
            <p>
              <strong>Favorite Music:</strong> {item.favMusic.join(", ")}
            </p>
            <p>
              <strong>Top Foods:</strong> {item.topFoods.join(", ")}
            </p>
            <p>
              <strong>Quirk:</strong> {item.quirk}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffCard;
