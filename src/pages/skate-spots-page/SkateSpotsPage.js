import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./skate-spots-page.scss";
import Footer from "../../components/footer/Footer";

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

  return (
    <div>
      <section className="all-spots">
        <h1 className="all-spots__title">ALL SKATE SPOTS:</h1>
        <ul className="all-spots__list">
          {skateSpots.map((skateSpot) => {
            return (
              <li key={skateSpot.id} className="all-spots__list-item">
                <Link
                  className="all-spots__list-link"
                  to={`/spot-details/${skateSpot.id}`}
                >
                  <div className="all-spots__list-container">
                    <p className="all-spots__list-item--title">
                      {skateSpot.title.toUpperCase()}
                    </p>
                    <img
                      className="all-spots__list-item--img"
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
      <Footer fixed={false} />
    </div>
  );
};

export default SkateSpotsPage;
