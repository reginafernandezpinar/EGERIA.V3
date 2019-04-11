import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";


// Presentational Component
const CardTrip = (props) => {
  const { trip } = props;
  return (
    <div>
      <Card>
        <Link to={`/trip/${trip.id}`}>
          <CardImg top width="100%" src={trip.photo} alt="Trip favourite image" />
        </Link>
        <CardBody>
            <CardTitle>{trip.name}</CardTitle>
            <CardSubtitle>{trip.username}</CardSubtitle>
            <CardText>{trip.description}</CardText>
          </CardBody>
      </Card>
    </div>
  );
};
export default CardTrip;
