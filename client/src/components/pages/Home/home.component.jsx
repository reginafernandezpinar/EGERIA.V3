import React from 'react';
import CarouselTrip from '../../trips/CarouselTrip';
import Categories from '../../trips/Categories';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';


class Home extends React.Component {

  componentDidMount() {
    this.props.getAllTrips();
    this.props.getCategories();
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Home Page</h3>
          <CarouselTrip />
          <Categories />

        </div>
      </MainLayout>
    );
  }
}

Home.propTypes = {
  getAllTrips: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

export default Home;
