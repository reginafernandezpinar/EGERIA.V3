import { connect } from 'react-redux';

// Import component
import carouselTrip from './carouselTrip.component';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    tripList: Array.isArray(state.trips.list) ? state.trips.list.slice(0, 4): [],
    tripLoading: state.trips.loading,
    tripError: state.trips.error,
  };
};

export default connect(
  mapStateToProps,
  null,
)(carouselTrip);
