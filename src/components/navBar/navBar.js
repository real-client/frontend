import React from "react";
import "./navBar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/opportunities">Opportunities</a>
        </li>
        <li>
          <a href="/competitions">Competitions</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li className="dropdown">
        <a href="/login">Login </a>
        <ul className="dropdown-content">
          <li> <a href="signup">Signup</a></li>
        </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
