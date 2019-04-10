import { connect } from 'react-redux';

// Import component
import Categories from './categories.component';

// Add Redux State to Component props
const mapStateToProps = state => {
    return {
        categoriesList: state.categories.list
    };
};

export default connect(
    mapStateToProps,
    null,
)(Categories);