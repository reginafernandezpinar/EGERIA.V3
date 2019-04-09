import React from 'react';
import CarouselTrip from '../../trips/CarouselTrip';
import Categories from '../../trips/Categories';
import PropTypes from 'prop-types';


class Home extends React.Component {

  componentDidMount() {
    this.props.getAllTrips();
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <CarouselTrip />
        <Categories />

      </div>
    );
  }
}

Home.propTypes = {
  getAllTrips: PropTypes.func.isRequired
};

export default Home;
