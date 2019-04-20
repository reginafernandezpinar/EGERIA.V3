import { connect } from 'react-redux';

// Import component
import TripForm from './tripForm.component';
import { createTrip } from '../../../models/actions/trip.actions';


// Add Redux State to Component props
const mapStateToProps = (state) => ({
    trip: state.trips.mytrips.selected,
    token: state.user.token
});

// Add Redux Dispatch to props
const mapDispatchToProps = {
    createTrip
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripForm);