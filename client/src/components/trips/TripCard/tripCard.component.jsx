import React from "react";
import { Link } from "react-router-dom";


// Presentational Component

const TripCard = (props) => {
  const { trip } = props;
  return (
    <div className="card">
      <Link to={`/trip/${trip.id}`}>
        <div className="card-img-top trip-card-image"
          style={{ "background-image": `url(${trip.photo})` }}>
        </div>
      </Link>
      <div className="card-body">
        <h4 className="card-title">{trip.name}</h4>
        <h5>{trip.userName}</h5>
        <div className="card-text overflow-hidden">
          <p>{trip.description}</p>
        </div>
      </div>
    </div>
  );
};
export default TripCard;
