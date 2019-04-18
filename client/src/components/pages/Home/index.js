import { connect } from 'react-redux';

// Import component
import Home from './home.component';

// Import action creator
import { getAllTrips, setSearchTripResults } from '../../../models/actions/trip.actions';
import { getCategories } from '../../../models/actions/categories.actions';


// Add Redux State to Component props
const mapStateToProps = state => ({
  userName: state.user.name,
  trips: state.trips.list
});

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
  getAllTrips,
  getCategories,
  setSearchTripResults 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);




/*
1 param. mapsStateToProps ==> Function that accepts state
map Redux's state and returns an object of props that are connected as comp props.
(esto va al payload)
Prop de lectura

2 param. mapDispatchToProps ==> Object of action creators
map the dispatching of our action creators to component props. Conecta la prop del comp a la accion(objeto): {getAllTrips} en este caso
Prop de escritura
*/




/*
Source files for the react-redux's mapDispatchToProps.js which is used in connect,
internally use bindActionCreators.
*/