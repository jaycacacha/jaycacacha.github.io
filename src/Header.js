import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header__container">
      <div className="header__name">
        <Link to="/" className="text-link">
          <p>Jay Cacacha</p>
        </Link>
        <p>|</p>
        <Link to="/about" className="text-link">
          <p>About</p>
        </Link>
        <p>|</p>
        <Link to="/contact" className="text-link">
          <p>Contact</p>
        </Link>
        <p>|</p>
        <Link className="text-link">
          <p>Resume</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
