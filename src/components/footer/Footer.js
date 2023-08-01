import React from "react";
import "./footer.scss";

const Footer = ({ fixed }) => {
  return (
    <footer className={fixed ? "footer footer-details" : "footer"}></footer>
  );
};

export default Footer;
