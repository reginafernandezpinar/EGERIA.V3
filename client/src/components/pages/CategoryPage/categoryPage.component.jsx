import React, { Component } from 'react';
import TripsCategory from '../../trips/TripsCategory';
import MainLayout from '../../layout/MainLayout';


class CategoryPage extends Component {
  
  componentDidMount() {
   this.props.getTripsCategory({category:'nature'});
  }

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Category Page</h3>
          {/* {
            // <TripsCategory />
          } */}
        </div>
      </MainLayout>
    );
  }
}


export default CategoryPage;

// Habria que llamar a esta pagina naturePage? o decirselo de forma dinamica aqui que renderice cada una de las categorias
