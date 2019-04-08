import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../../trips/CategoryList';

class CategoryPage extends Component {
  componentDidMount() {
    // this.props.getAllTrips();
  }

  render() {
    return (
      <div>
        <h3>Category Page</h3>
        <CategoryList />
      </div>
    );
  }
}

CategoryPage.propTypes = {
  //   getAllTrips: PropTypes.func.isRequired,
};

export default CategoryPage;

// Habria que llamar a esta pagina naturePage? o decirselo de forma dinamica aqui que renderice cada una de las categorias
