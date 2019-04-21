import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import component
import SearchPage from './searchPage.component';

// Import action creator
import { getAllTrips } from '../../../models/actions/trip.actions';


// Add Redux State to Component props
const mapStateToProps = state => ({
  searchResults: state.trips.search.results,
  trips: state.trips.list
});

// Add Redux dispatch to Component props
const mapDispatchToProps = {
  getAllTrips
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage));