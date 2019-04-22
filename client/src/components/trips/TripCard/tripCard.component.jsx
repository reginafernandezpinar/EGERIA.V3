import React from "react";
import { Link } from "react-router-dom";


// Presentational Component

const TripCard = (props) => {
  const { trip } = props;
  return (
    <div className="card">
      <Link to={`/trip/${trip.id}`}>
        <div className="card-img-top"
          style={{ "background-image": `url(${trip.photo})` }}>
        </div>
      </Link>
      <div className="card-body">
        <h5>{trip.name}</h5>
        <p>@{trip.userName}</p>
        <div className="card-text overflow-hidden">
        {trip.description}
        </div>
      </div>
    </div>
  );
};
export default TripCard;
