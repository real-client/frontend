import React from "react";
import { useState } from "react";
import "./navBar.css";

function Navbar() {
  // const {show, setShow} = useState(null)

  // const showSignup = () => {
  //   setShow(true)
  // }

  // const hideSignup = () => {
  //   setShow(false)
  // }

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
