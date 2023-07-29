import React from "react";
import "./footer.scss";

const Footer = ({ fixed }) => {
  return (
    <footer className={fixed ? "footer footer-details" : "footer"}>
      <h3 className="footer__title">Footer</h3>
    </footer>
  );
};

export default Footer;
