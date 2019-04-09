import { initialTripState } from './trip.state';

export function tripReducer(state = initialTripState, action) { //recibe el estado global por defecto y la accion 
  switch (action.type) {
    case 'GET_ALL_TRIPS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'GET_ALL_TRIPS_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    case 'GET_ALL_TRIPS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'GET_TRIP_LOADING':
      return {
        ...state,
        selected: { ...state.selected, loading: true }
      };
    case 'GET_TRIP_SUCCESS':
      return {
        ...state,
        selected: { ...state.selected, loading: false, trip: action.payload }
      };
    case 'GET_TRIP_ERROR':
      return {
        ...state,
        selected: { ...state.selected, loading: false, error: action.payload }
      };
    case 'GET_CATEGORY_LOADING':
      return {
        ...state,
        category: { ...state.category, loading: true }
      };
    case 'GET_CATEGORY_SUCCESS':
      return {
        ...state,
        category: { ...state.category, loading: false, list: action.payload }
      };
    case 'GET_CATEGORY_ERROR':
      return {
        ...state,
        category: { ...state.category, loading: false, error: action.payload }
      };


    default:
      return state;
  }
}




// every reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer.
