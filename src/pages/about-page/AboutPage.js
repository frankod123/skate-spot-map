import React from "react";
import "./about-page.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="about-title">ABOUT</h1>
      <p className="about-text">
        This app is designed for skateboarders who are looking for places to
        skate in their local area. It shows the user all the skateparks and
        skate spots surrounding them.
      </p>
      <p className="about-text">
        This app tackles a problem that myself and many other skateboarders have
        experienced of not knowing, or being unable to decide, where to go
        skateboarding. It is especially useful for people who are travelling and
        need guidance on where to go.
      </p>
      <h3 className="about-subtitle">TECH STACK USED:</h3>
      <p className="about-text">HTML, CSS, React, Express, Mapbox</p>
    </div>
  );
};

export default AboutPage;
