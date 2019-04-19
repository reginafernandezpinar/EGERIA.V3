import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import CategoryPage from './categoryPage.component';

// Import action creator
import { getTripsCategory } from '../../../models/actions/trip.actions';
import { getCategories } from '../../../models/actions/categories.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    categoriesList: state.categories.list
  };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  getTripsCategory,
  getCategories,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage));
