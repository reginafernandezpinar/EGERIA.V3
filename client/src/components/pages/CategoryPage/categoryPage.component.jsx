import React, { Component } from 'react';
import TripsCategory from '../../trips/TripsCategory';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';

// Import styles
import "./styles.scss";


class CategoryPage extends Component {

  componentDidMount() {
    // we use the match prop to get the category from the url params
    this.props.getTripsCategory({ category: this.props.match.params.id });

    // categoriesList will be lost when page is reloaded, so we need it to be dispatch again
    if (this.props.categoriesList.length == 0) {
      this.props.getCategories();
    }
  }

  render() {
    const { categoriesList } = this.props;
    const categoryId = this.props.match.params.id;
    const category = categoriesList.find(e => e.id === categoryId);
    // because of async, it can happens component renders before execution componentdidmount
    const categoryPicture = category && category.picture;
    const categoryLabel = category && category.label

    return (
      <MainLayout>
        <div className="category-page">
          <div className="category-image mb-5"
            style={{
              "backgroundImage": `linear-gradient( to bottom,
                rgba(0, 0, 0, 0.8), 
                rgba(0, 0, 0, 0.2)
              ),url('${categoryPicture}')`
            }}>
            <h4 className="p-5 text-center text-white">
              {categoryLabel}
            </h4>
          </div>
          <div>
            <TripsCategory />
          </div>
        </div>
      </MainLayout>
    );
  }
}

CategoryPage.propTypes = {
  getTripsCategory: PropTypes.func.isRequired
};

export default CategoryPage;