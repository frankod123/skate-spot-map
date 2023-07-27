import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__title-link">
        <h1 className="header__title">Skate Spot Map</h1>
      </Link>
    </header>
  );
};

export default Header;
