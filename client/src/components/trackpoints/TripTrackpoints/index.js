import { connect } from 'react-redux';

// Import component
import TripTrackpoints from './tripTrackpoints.component';


// Add Redux State to Component props
const mapStateToProps = (state) => {
    return {
        tripTrackpoints: state.trackpoints.tripTrackpoints.list,
        tripTrackpointsLoading: state.trackpoints.tripTrackpoints.loading,
        tripTrackpointsError: state.trackpoints.tripTrackpoints.error
    };
};


export default connect(
    mapStateToProps,
    null
)(TripTrackpoints);