import { connect } from 'react-redux';

// Import component
import TripsGlobe from './tripsGlobe.component';

// Import action creator
import { setSelectedTrackpoint } from '../../../models/actions/trackpoints.actions';

// Add Redux State to Component props
const mapStateToProps = state => ({
  trackpoints: state.trackpoints.list,
  selectedTrackpoint: state.trackpoints.selected.trackpoint
});

// Add Redux dispatch to Component props
const mapDispatchToProps = {
  setSelectedTrackpoint
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsGlobe);