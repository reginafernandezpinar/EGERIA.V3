import { connect } from 'react-redux';

// Import component
import TripForm from './tripForm.component';


// Add Redux State to Component props
const mapStateToProps = (state) => ({
    trip: state.trips.mytrips.selected
});


export default connect(
    mapStateToProps,
    null
)(TripForm);