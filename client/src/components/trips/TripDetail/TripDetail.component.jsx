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
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="card-body">

                            <div className="card-title">
                                <div>Trip name</div>
                                <h3 >{tripSelected.name}</h3>
                            </div>

                            <div className="card-text">
                                <div>Category</div>
                                <p>{tripSelected.category}</p>
                            </div>
                            <div className="card-text">
                                <div>Companionship</div>
                                <p>{tripSelected.companionship}</p>
                            </div>
                            <div className="card-text">
                                <div>My trip starts in</div>
                                <p>{tripSelected.starting_point}</p>
                                <div>and finishes in</div>
                                <p>{tripSelected.destination_point}</p>
                            </div>
                            <div className="card-text">
                                <div>{`${tripSelected.distance} `}Km</div>
                            </div>
                            <div className="card-user">
                                <div>@{tripSelected.userName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className="trip-card-image" style={{ "background-image": `url(${tripSelected.photo})` }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                          <div className="card-description">
                            <div>Description</div>
                            <p>{tripSelected.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TripDetail;