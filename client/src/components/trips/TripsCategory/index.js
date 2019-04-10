import { connect } from 'react-redux';

// Import component
import TripsCategory from './TripsCategory.component';

// Add Redux State to Component props
const mapStateToProps = state => {
    return {
      tripsCategory: Array.isArray(state.trips.category.list) ? state.trips.category.list: [],
      tripsCategoryLoading: state.trips.category.loading,
      tripsCategoryError: state.trips.category.error,
    };
};


export default connect(
  mapStateToProps,
  null
)(TripsCategory);