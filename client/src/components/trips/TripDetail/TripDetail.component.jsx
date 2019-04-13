import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class TripDetail extends Component {
    
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
                <div>
                    <CardImg top width="100%" src={tripSelected.photo} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{tripSelected.name}</CardTitle>
                        <CardSubtitle>{tripSelected.userName}</CardSubtitle>
                        <CardText>{tripSelected.description}</CardText>
                        <CardText>
                            tripcategory:{tripSelected.category}
                            I travel with: {tripSelected.companionship}
                            startingPoint: {tripSelected.startingPoint}
                            destinationPoint: {tripSelected.destinationPoint}
                            Km: {tripSelected.distance}
                        </CardText>
                    </CardBody>
                </div>
            </Card>
        );
    }
};

export default TripDetail;