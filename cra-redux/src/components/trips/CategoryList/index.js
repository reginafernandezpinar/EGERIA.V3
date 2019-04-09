import { connect } from 'react-redux';

// Import component
import CategoryList from './categoryList.component';

// Import action creator
import { getCategory } from '../../../models';

// Add Redux State to Component props
const mapStateToProps = (state) => {
    return {
        categoryList: state.trips.category.list,
        categoryLoading: state.trips.category.loading,
        categoryError: state.trips.category.error
    };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { getCategory };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);