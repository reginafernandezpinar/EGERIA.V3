import { connect } from 'react-redux';

// Import component
import TripsSearch from './tripsSearch.component';

// Import action creator
import { setSearchTripResults } from '../../../models/actions/trip.actions';


// Add Redux State to Component props
const mapStateToProps = state => {
    return {
      trips: state.trips.list,
      searchResults: state.trips.search.results,
      user: state.user
    };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  setSearchTripResults 
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsSearch);