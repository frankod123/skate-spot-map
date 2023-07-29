import "mapbox-gl/dist/mapbox-gl.css";
import "https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./home-page.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const TOKEN = process.env.REACT_APP_TOKEN;

mapboxgl.accessToken = TOKEN;

function HomePage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-1.4702278);
  const [lat, setLat] = useState(53.3806626);
  const [zoom, setZoom] = useState(11.2);

  // const hi = () => {
  //   window.history.pushState("", "Title", "/spot-details");
  // };

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/frankod123/clkj4as3b00c701ph0dui2vx3",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("click", (event) => {
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["sheff-spots"],
      });

      if (!features.length) {
        return;
      }
      const feature = features[0];
      console.log(feature.properties);

      // const click = () => {
      //   console.log("hi");
      // };

      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `
          <h3 class="popup-title">${feature.properties.title}</h3>
          <img class="popup-image" alt=${feature.properties.title} src="${feature.properties.image}"/>
          <p class="popup-description">${feature.properties.description}</p>
          <p class="popup-address--title">Address: </p>
          <p class="popup-address">${feature.properties.address}</p>
          <a class="popup-link" href="/spot-details/${feature.properties.id}">See more</a>
           `
        )
        .addTo(map.current);
    });
  }, []);

  //   <button class="popup-button" onClick="hi()">See more</button>

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div>
      <Header toggle={true} />
      <div ref={mapContainer} className="map-container" />
      <Footer fixed={true} />
    </div>
  );
}

export default HomePage;
