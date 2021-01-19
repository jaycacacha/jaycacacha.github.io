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
        <a
          href="https://drive.google.com/file/d/1E0Zsszw8mZXmKcn63xbVm-S65Y2HS522/view?usp=sharing"
          className="text-link"
          target="_blank"
          rel="noreferrer"
        >
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
