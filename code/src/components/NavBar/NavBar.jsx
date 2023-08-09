import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul>
      <li class="dropdown">
        <a href="" class="dropbtn">
          <FaPizzaSlice />
        </a>
        <div className="dropdown-content">
          <a href="#">About Bocca</a>
          <a href="#">Contact</a>
          <a href="#">Pizzas</a>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
