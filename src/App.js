import "./App.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import "https://api.tiles.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js";
import ReactMapGL from "react-map-gl";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const TOKEN = process.env.REACT_APP_TOKEN;

mapboxgl.accessToken =
  TOKEN;

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-1.4702278);
  const [lat, setLat] = useState(53.3806626);
  const [zoom, setZoom] = useState(11.2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/frankod123/clkj4as3b00c701ph0dui2vx3",
      center: [lng, lat],
      zoom: zoom,
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
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
  );
}

export default App;
