import { connect } from 'react-redux';

// Import component
import TripDetail from './TripDetail.component';


// Add Redux State to Component props
const mapStateToProps = (state) => {
    return {
        tripSelected: state.trips.selected.trip,
        tripSelectedLoading: state.trips.selected.loading,
        tripSelectedError: state.trips.selected.error
    };
};


export default connect(
    mapStateToProps,
    null
)(TripDetail);