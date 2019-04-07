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
        this.props.getTrip();
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
                    tripSelected.map((trip) => {
                        return (
                            <div>
                                <CardImg top width="100%" src={trip.photo} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle>{trip.name}</CardTitle>
                                    <CardSubtitle>{trip.username}</CardSubtitle>
                                    <CardText>{trip.description}</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </div>
                        )
                    })
                }
            </Card>
        );
    }
};

export default GlobeCardTrip;

// link a detalle en lugar de boton??