import "mapbox-gl/dist/mapbox-gl.css";
import "https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js";
import ReactMapGL from "react-map-gl";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./home-page.scss";

const TOKEN = process.env.REACT_APP_TOKEN;

mapboxgl.accessToken = TOKEN;

function HomePage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-1.4702278);
  const [lat, setLat] = useState(53.3806626);
  const [zoom, setZoom] = useState(11.2);

  const hi = () => {
    window.history.pushState('', 'Title', '/spot-details');
};

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/frankod123/clkj4as3b00c701ph0dui2vx3",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("click", (event) => {
      // If the user clicked on a marker, get its information.
      const features = map.current.queryRenderedFeatures(event.point, {
        layers: ["sheff-spots"],
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      const click = () => {
        console.log("hi");
      };

      /* Create a popup, specify its options 
            and properties, and add it to the map. */
      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3>
            <p>${feature.properties.description}</p>
            <button onClick="hi()">See more</button>
            <a href="/spot-details/${feature.properties.title}">See more</a>`

        )
        .addTo(map.current);
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
    </div>
  );
}

export default HomePage;
