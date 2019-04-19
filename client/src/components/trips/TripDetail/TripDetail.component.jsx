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
            <div className="detail-container">

                <div className="card-body">
                    <div className="card-title">
                        <h4 >{tripSelected.name}</h4>
                    </div>
                    <div className="card-description">
                        <h5>Description</h5>
                        <p>{tripSelected.description}</p>
                    </div>
                    <div className="card-category">
                        <h5>Category</h5>
                        <p>{tripSelected.category}</p>
                    </div>
                    <div className="card-text">
                        <h5>Companionship</h5>
                        <p>{tripSelected.companionship}</p>
                    </div>
                    <div className="card-text">
                        <h5>My trip starts in</h5>
                        <p>{tripSelected.startingPoint}</p>
                        <h5>and finish in</h5>
                        <p>{tripSelected.destinationPoint}</p>
                    </div>
                    <div className="card-text distance-container">
                        <p>{tripSelected.distance}</p>
                        <h5>Km</h5>
                    </div>
                    <div className="card-user">
                        <p>@{tripSelected.userName}</p>
                    </div>
                </div>
                <div className="trip-card-image"
                    style={{ "background-image": `url(${tripSelected.photo})` }}>
                </div>
            </div>
        );
    }
};

export default TripDetail;