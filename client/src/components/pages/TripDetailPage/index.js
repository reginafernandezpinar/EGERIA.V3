import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import TripDetailPage from './tripDetailPage.component';

// Import action creator
import { getTrip } from '../../../models/actions/trip.actions';

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  getTrip
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(TripDetailPage));