import { connect } from 'react-redux';

// Import component
import CategoryList from './categoryList.component';

// Import action creator
import tripActions from '../../../models/actions';

// Add Redux State to Component props
const mapStateToProps = state => {
    return {
      categoryList: Array.isArray(state.trips.category.list) ? state.trips.category.list: [],
      categoryLoading: state.trips.category.loading,
      categoryError: state.trips.category.error,
    };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { getCategory: tripActions.getCategory };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);