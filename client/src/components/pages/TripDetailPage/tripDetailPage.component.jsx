import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import components
import TripTrackpoints from '../../trackpoints/TripTrackpoints';
import TripDetail from '../../trips/TripDetail';
import MainLayout from '../../layout/MainLayout';


// Import styles
import "./styles.scss";

class TripDetailPage extends Component {

  componentDidMount() {
    // we use the match prop to get the trip_id from the url params      
    this.props.getTrip(this.props.match.params.id);
    this.props.getAllTrackpointsbyTripId({tripId: this.props.match.params.id})
  }

  render() {
    return (
      <MainLayout>
        <div className="trip-detail-page" >
            <TripDetail/>
            <div className="title-tp-section">
              <h2>Points of interest</h2>
            </div>
            <TripTrackpoints/>
        </div>
      </MainLayout>
    );
  }
}

TripDetailPage.propTypes = {
    getTrip: PropTypes.func.isRequired
};

export default TripDetailPage;