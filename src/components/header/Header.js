import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import globe from "../../assets/images/globe.svg";

const Header = ({ toggle }) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__title-link">
          <h1 className="header__title">SKATE SPOT MAP</h1>
        </Link>
        <img src={globe} className="header__image"/>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          <h3 className="header__nav-text">Map</h3>
        </Link>
        <Link to="/skate-spots" className="header__nav-link">
          <h3 className="header__nav-text">Skate Spots</h3>
        </Link>
        <Link to="/about" className="header__nav-link">
          <h3 className="header__nav-text">About</h3>
        </Link>
        <Link to="/contact" className="header__nav-link">
          <h3 className="header__nav-text header__nav-text--contact">
            Contact
          </h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
