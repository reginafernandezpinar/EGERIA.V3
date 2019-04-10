import React, { Component } from 'react';
import TripsCategory from '../../trips/TripsCategory';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';


class CategoryPage extends Component {

  componentDidMount() {
    this.props.getTripsCategory({ category: this.props.match.params.id });
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Category Page</h3>
          <TripsCategory />
        </div>
      </MainLayout>
    );
  }
}

CategoryPage.propTypes = {
  getTripsCategory: PropTypes.func.isRequired
};

export default CategoryPage;

// Habria que llamar a esta pagina naturePage? o decirselo de forma dinamica aqui que renderice cada una de las categorias
