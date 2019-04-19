import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import components
import TripDetail from '../../trips/TripDetail';
import MainLayout from '../../layout/MainLayout';

// Import global resources
import mapImage from "../../../assets/img/mapImage.png";

// Import styles
import "./styles.scss";

class TripDetailPage extends Component {

  componentDidMount() {      
    this.props.getTrip(this.props.match.params.id);
  }

  render() {
    return (
      <MainLayout>
        <div className="trip-detail-page"  style={{ "background-image": `url(${mapImage})` }}>
          <div className="container">
            <TripDetail/>
          </div>
        </div>
      </MainLayout>
    );
  }
}

TripDetailPage.propTypes = {
    getTrip: PropTypes.func.isRequired
};

export default TripDetailPage;