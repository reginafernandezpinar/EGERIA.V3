import { connect } from 'react-redux';

// Import component
import CardTrip from './globeCardTrip.component';

// Import action creator
import { getTrip } from '../../../models';

// Add Redux State to Component props
const mapStateToProps = (state) => {
    return {
        tripSelected: state.trips.selected.trip,
        tripSelectedLoading: state.trips.selected.loading,
        tripSelectedError: state.trips.selected.error
    };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { getTrip };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardTrip);