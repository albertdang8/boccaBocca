import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li class="dropdown">
          <a href="" className="dropbtn">
            <FaPizzaSlice />
          </a>
          <div className="dropdown-content">
            <Link to="#">Contact</Link>
            <Link to="/about">About Bocca</Link>
            <Link to="#">Pizzas</Link>
          </div>
        </li>
      </ul>
      <div className="title">
        BoccaBoccaPizza
      </div>
    </div>
  );
};

export default NavBar;
