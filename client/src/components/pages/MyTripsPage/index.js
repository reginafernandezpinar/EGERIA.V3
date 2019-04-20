import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import MyTripsPage from './myTripsPage.component';

// Import action creator
import { createTrip, deleteTrip, updateTrip, getUserTrips } from '../../../models/actions/trip.actions';

// Add Redux dispatch to Component props
const mapDispatchToProps = {
    createTrip,
    deleteTrip,
    updateTrip,
    getUserTrips
};

// Add Redux map state to props
const mapStateToProps = state => ({
    trips: state.trips.mytrips.list,
    user: state.user
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MyTripsPage));