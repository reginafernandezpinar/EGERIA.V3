import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class GlobeCardTrip extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        this.props.getTrip(this.props.tripId);
    }
    render() {
        const { tripSelected, tripError, tripLoading } = this.props;
        if (tripError) {
            return <p>Sorry! There was an error loading the trips</p>;
        }
        if (tripLoading) {
            return <p>Loading…</p>;
        }
        return (
            <Card>
                {
                    <div>
                        <CardImg top width="100%" src={tripSelected.photo} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{tripSelected.name}</CardTitle>
                            <CardSubtitle>{tripSelected.username}</CardSubtitle>
                            <CardText>{tripSelected.description}</CardText>
                            <CardText>{tripSelected.companionship}</CardText>
                            <CardText>{tripSelected.category}</CardText>
                        </CardBody>
                    </div>
                }
            </Card>
        );
    }
};

export default GlobeCardTrip;

// link a detalle en lugar de boton??