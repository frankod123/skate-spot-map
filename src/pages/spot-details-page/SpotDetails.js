import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./spot-details.scss";

const baseURL = process.env.REACT_APP_BASE_URL;

const SpotDetails = () => {
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

  console.log(skateSpots);

  useEffect(() => {
    
      axios
        .get(`${baseURL}/skate-spots/${spotId}`)
        .then((response) => {
          setSelectedSpot(response.data);
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

//   if (!selectedSpot) {
//     return <p className="loading-text">Loading...</p>;
//   }

  return (
    <div>
      {skateSpots.map((skateSpot) => {
        return (
          <article key={skateSpot.id} className="details">
            <h1 className="details-title">{`${skateSpot.title}`}</h1>
            <p className="details-title">{`${skateSpot.description}`}</p>
            <img className="details-image" src=""/>
          </article>
        );
      })}
     
    </div>
  );
};

export default SpotDetails;
