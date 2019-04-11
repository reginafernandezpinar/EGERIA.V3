import React, { Component } from 'react';
import TripDetail from '../../trips/TripDetail';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';


class TripDetailPage extends Component {

  componentDidMount() {      
    this.props.getTrip(this.props.match.params.id);
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Trip detail Page</h3>
          <TripDetail/>
        </div>
      </MainLayout>
    );
  }
}

TripDetailPage.propTypes = {
    getTrip: PropTypes.func.isRequired
};

export default TripDetailPage;