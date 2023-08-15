import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            <FaPizzaSlice />
          </a>
          <div className="dropdown-content">
            <Link to="/about">About Bocca</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pizzas">Pizzas</Link>
            <Link to="/">Home</Link>
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
