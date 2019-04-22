import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import TripDetailPage from './tripDetailPage.component';

// Import action creators
import { getTrip } from '../../../models/actions/trip.actions';
import { getAllTrackpointsbyTripId } from '../../../models/actions/trackpoints.actions';


// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  getTrip, getAllTrackpointsbyTripId
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(TripDetailPage));