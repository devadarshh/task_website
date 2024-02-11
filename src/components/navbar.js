import "./App.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">Digitial Agency</div>
      <ul className="navbar-right">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
