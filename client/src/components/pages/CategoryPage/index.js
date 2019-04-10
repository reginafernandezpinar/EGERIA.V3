import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import CategoryPage from './categoryPage.component';

// Import action creator
import { getTripsCategory } from '../../../models/actions/trip.actions';

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  getTripsCategory
};

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CategoryPage));
