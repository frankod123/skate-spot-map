import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ( {toggle} ) => {
  return (
    <header className="header">
      <Link to="/" className="header__title-link">
        <h1 className="header__title">Skate Spot Map</h1>
      </Link>
      <div className={toggle ? "header__satellite-container": "header__satellite-container--hidden"}>
        <h3 className="header__satellite-title">Satellite View</h3>
        <div className="header__satellite-sub-container">
          <Link to="/satellite" className="header__satellite-link header__satellite-link--border">
            <p className="header__satellite-toggle">ON</p>
          </Link>
          <Link  to="/" className="header__satellite-link">
            <p className="header__satellite-toggle">OFF</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
