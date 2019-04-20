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
            <div className="trip-detail">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-4">
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
                                <h5>and finishes in</h5>
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
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="trip-card-image" style={{ "background-image": `url(${tripSelected.photo})` }} />
                    </div>
                </div>
            </div>
        );
    }
};

export default TripDetail;