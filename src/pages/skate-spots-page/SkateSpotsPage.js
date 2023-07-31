import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./skate-spots-page.scss";

const baseURL = process.env.REACT_APP_BASE_URL;

const SkateSpotsPage = () => {
    const [skateSpots, setSkateSpots] = useState([]);
    
    useEffect(() => {
      axios
        .get(`${baseURL}/skate-spots`)
        .then((response) => {
          setSkateSpots(response.data);
        })
  
        .catch((error) => console.error(error));
    }, []);
  
    console.log(skateSpots);

  return (
    
    <section className="side-spots">
        <h1 className="side-spots__title">All Skate Spots:</h1>
    <ul className="side-spots__list">
      {skateSpots.map((skateSpot) => {
        return (
          <li key={skateSpot.id} className="side-spots__list-item">
            <Link
              className="side-spots__list-link"
              to={`/spot-details/${skateSpot.id}`}
            >
              <div className="side-spots__list-container">
              <p className="side-spots__list-item--title">
                {skateSpot.title}
              </p>
              <img
                className="side-spots__list-item--img"
                src={skateSpot.image}
                alt={skateSpot.title}
              />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
  )
}

export default SkateSpotsPage