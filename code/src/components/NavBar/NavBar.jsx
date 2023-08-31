import React from "react";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header container">
      <nav>
        <ul className="header__menu">
          <li>
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/pizzas">
              Pizzas
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="header__line"></li>
          <li>
            <button className="header__sun">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
{
  /* <li>
  <a href="#" className="">
  <FaPizzaSlice />
  </a>
</li> */
}

export default NavBar;
