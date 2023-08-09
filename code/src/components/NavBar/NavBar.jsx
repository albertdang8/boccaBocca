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
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </li>
    </ul>
  );
};

export default NavBar;
