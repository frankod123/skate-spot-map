import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./spot-details-page.scss";
import SpotList from "../../components/spot-list/SpotList";
import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import Comments from "../../components/comments/Comments";
import globeTilted from "../../assets/images/globe-tilted.jpeg";
import globeRed from "../../assets/images/globe-red.webp";
import globeMaroon from "../../assets/images/globe-maroon-2.webp";
import globe from "../../assets/images/globe.svg";

const baseURL = process.env.REACT_APP_BASE_URL;

const SpotDetailsPage = () => {
  const [skateSpots, setSkateSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const { spotId } = useParams();

  useEffect(() => {
    axios
      .get(`${baseURL}/skate-spots`)
      .then((response) => {
        setSkateSpots(response.data);
      })

      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (spotId) {
      axios
        .get(`${baseURL}/skate-spots/${spotId}`)
        .then((response) => {
          setSelectedSpot(response.data);
          console.log(response.data);
        })

        .catch((error) => console.error(error));
    } else {
      axios
        .get(`${baseURL}/skate-spots/1`)
        .then((response) => {
          setSelectedSpot(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [spotId]);

  if (!selectedSpot) {
    return <p className="loading-text">Loading...</p>;
  }

  return (
    <div>
      <article key={selectedSpot.id} className="details">
        <div className="details-container">
          <div
            className="details-text-container"
            // style={{
            //   backgroundImage: `url(${globe})`,
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            // }}
          >
            <h1 className="details-title">{`${selectedSpot.title.toUpperCase()}`}</h1>
            {/* <img className="details-image" src={globe}/> */}
            <p className="details-text details-description">{`${selectedSpot.description}`}</p>
            <ul className="details-list">
              <li className="details-list-item">{`${selectedSpot.environment}`}</li>
              <li className="details-list-item">{`${selectedSpot.pricing}`}</li>
              <li className="details-list-item">{`${selectedSpot.lighting}`}</li>
            </ul>
          </div>
          <img
            className="details-image"
            src={`${selectedSpot.image}`}
            alt={`${selectedSpot.title}`}
          />
          <img
            className="details-image"
            src={`${selectedSpot.image2}`}
            alt={`${selectedSpot.title}`}
          />
          <img
            className="details-image"
            src={`${selectedSpot.image3}`}
            alt={`${selectedSpot.title}`}
          />
        </div>
      </article>
      <Comments selectedSpot={selectedSpot} />
      <SpotList skateSpots={skateSpots} selectedSpot={selectedSpot} />
      <Footer fixed={false} />
    </div>
  );
};

export default SpotDetailsPage;
