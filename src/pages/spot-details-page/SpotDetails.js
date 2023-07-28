import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./spot-details.scss";

const baseURL = process.env.REACT_APP_BASE_URL;

const SpotDetails = () => {
  // const [skateSpots, setSkateSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  const { spotId } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/skate-spots`)
  //     .then((response) => {
  //       setSkateSpots(response.data);
  //     })

  //     .catch((error) => console.error(error));
  // }, []);

  // console.log(skateSpots);

  useEffect(() => {
    axios
      .get(`${baseURL}/skate-spots/${spotId}`)
      .then((response) => {
        setSelectedSpot(response.data);
        console.log(response.data);
      })

      .catch((error) => console.error(error));
  }, []);
  //     else {
  //       axios
  //         .get(`${baseURL}/skate-spots/1`)
  //         .then((response) => {
  //           setSelectedSpot(response.data);
  //         })
  //         .catch((error) => console.error(error));
  //     }
  //   }, [spotId]);

    if (!selectedSpot) {
      return <p className="loading-text">Loading...</p>;
    }

  return (
    <div>
      <article key={selectedSpot.id} className="details">
        <h1 className="details-text details-title">{`${selectedSpot.title}`}</h1>
        <p className="details-text details-description">{`${selectedSpot.description}`}</p>
        <p className="details-text details-lights">Floodlights?: {`${selectedSpot.floodlights}`}</p>
        <img className="details-image" src={`${selectedSpot.image}`} />
      </article>
    </div>
  );
};

export default SpotDetails;
