import { connect } from 'react-redux';

// Import component
import TripsCategory from './tripsCategory.component';

// Add Redux State to Component props
const mapStateToProps = state => {
    return {
      // because of async, it can happens component renders before mapStateToProps occurs
      tripsCategory: Array.isArray(state.trips.category.list) ? state.trips.category.list: [],
      tripsCategoryLoading: state.trips.category.loading,
      tripsCategoryError: state.trips.category.error,
    };
};


export default connect(
  mapStateToProps,
  null
)(TripsCategory);