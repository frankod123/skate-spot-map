import { Link } from "react-router-dom";
import "./spot-list.scss";

const SpotList = (props) => {
  const filteredArray = props.skateSpots.filter((skateSpot) => {
    return skateSpot.id !== props.selectedSpot.id;
  });
  return (
    <section className="side-spots">
      <h3 className="side-spots__title">See Also: </h3>
      <ul className="side-spots__list">
        {filteredArray.map((skateSpot) => {
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
  );
};

export default SpotList;
