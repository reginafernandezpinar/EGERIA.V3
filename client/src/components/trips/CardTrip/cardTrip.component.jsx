import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

// Presentational Component
const CardTrip = (props) => {
    const { trip } = props;
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={trip.photo} alt="Trip favourite image" />
                <CardBody>
                    <CardTitle>{trip.name}</CardTitle>
                    <CardSubtitle>{trip.username}</CardSubtitle>
                    <CardText>{trip.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardTrip;