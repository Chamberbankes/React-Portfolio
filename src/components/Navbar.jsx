import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Corey Chamberlain
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};