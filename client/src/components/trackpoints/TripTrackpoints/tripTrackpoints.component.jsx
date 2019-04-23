import React, { Component } from 'react';

// Import components
import TrackpointCard from '../../trackpoints/TrackpointCard/trackpointCard.component';

class TripTrackpoints extends Component {

    render() {
        const { tripTrackpoints, tripTrackpointsError, tripTrackpointsLoading } = this.props;
        if (tripTrackpointsError) {
            return <p className="container">Sorry! There was an error loading the trackpoints</p>;
        }
        if (tripTrackpointsLoading) {
            return <p className="container">Loading…</p>;
        }
        return (
            <div className='trackpoint-detail'>
                <div className="row">
                    {
                        tripTrackpoints.map((trackpoint) => {
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <TrackpointCard key={trackpoint.id} trackpoint={trackpoint} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TripTrackpoints;