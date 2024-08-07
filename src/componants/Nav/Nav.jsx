import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="">
      <div class="responsive-bar">
        <div class="logo">
          <img
            src="./logo1.png"
            alt="logo"
          />
          
        </div>
        <div class="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div class="logo">
          <img
            src="./logo1.png"
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Residencie</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
