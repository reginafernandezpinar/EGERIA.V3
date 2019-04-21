import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import component
import SearchPage from './searchPage.component';

// Import action creator


// Add Redux State to Component props
const mapStateToProps = state => ({
    searchResults: state.trips.search.results
});

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
};


export default withRouter(connect(
  mapStateToProps,
  null,
)(SearchPage));