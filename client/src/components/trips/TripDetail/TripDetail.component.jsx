import React, { Component } from 'react';


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
            <div className="card">
                <div className="card-img-top trip-card-image"
                    style={{ "background-image": `url(${tripSelected.photo})` }}>
                </div>
                <div className="card-body">

                    <div className="card-title">
                        <h4 >{tripSelected.name}</h4>
                    </div>
                    <div className="card-user">
                        <h5>@{tripSelected.userName}</h5>
                    </div>
                    <div className="card-description">
                        <h5>Description</h5>
                        <p>{tripSelected.description}</p>
                    </div>
                    <div className="card-category">
                        <p>{tripSelected.category}</p>
                    </div>
                    <div className="card-text">
                        <p>My companionship: {tripSelected.companionship}</p>
                    </div>
                    <div className="card-text">
                        <p>My trip starts in {tripSelected.startingPoint} and finish in {tripSelected.destinationPoint}</p>
                    </div>
                    <div className="card-text">
                        <p>Km: {tripSelected.distance}</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default TripDetail;