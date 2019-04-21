import { connect } from 'react-redux';

// Import component
import TripsGlobe from './tripsGlobe.component';

// Import action creator


// Add Redux State to Component props
const mapStateToProps = state => ({
   trackpoints: state.trackpoints.list
});

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
   
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsGlobe);