import { initialTripState } from './trip.state';

import { toastr } from 'react-redux-toastr';

export function tripReducer(state = initialTripState, action) {
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
      toastr.error('There was an error retrieving the trips data');
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
    case 'GET_TRIPS_CATEGORY_LOADING':
      return {
        ...state,
        category: { ...state.category, loading: true }
      };
    case 'GET_TRIPS_CATEGORY_SUCCESS':
      return {
        ...state,
        category: { ...state.category, loading: false, list: action.payload }
      };
    case 'GET_TRIPS_CATEGORY_ERROR':
      return {
        ...state,
        category: { ...state.category, loading: false, error: action.payload }
      };

    // ================== SEARCH TRIP REDUCER  ==================
    case 'SET_SEARCH_TRIP_RESULTS':
      return {
        ...state,
        search: {
          results: action.payload
        }
      };

    // ========= SELECTED TRIP ==============  
    case 'SET_SELECTED_TRIP':
      return {
        ...state,
        mytrips: {
          ...state.mytrips,
          selected: action.payload
        }
      };

    // ==================  TRIP CRUD REDUCERS  ==================

    case 'GET_USER_TRIPS_LOADING':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: true }
      };
    case 'GET_USER_TRIPS_SUCCESS':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, list: action.payload }
      };
    case 'GET_USER_TRIPS_ERROR':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, error: action.payload }
      };

    // ---------------- CREATE ---------

    case 'CREATE_TRIP_LOADING':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: true }
      };
    case 'CREATE_TRIP_SUCCESS':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, list: [...state.mytrips.list, action.payload] }
      };
    case 'CREATE_TRIP_ERROR':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, error: action.payload }
      };

    // ---------------- UPDATE ---------

    case 'UPDATE_TRIP_LOADING':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: true }
      };
    case 'UPDATE_TRIP_SUCCESS':
      const array = state.mytrips.list;
      const elementIndex = array.findIndex((elem) => elem.id === action.payload.id);
      const newArray = [...array];
      newArray[elementIndex] = action.payload;
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, list: newArray }
      };
    case 'UPDATE_TRIP_ERROR':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, error: action.payload }
      };

    // ---------------- DELETE ---------
    case 'DELETE_TRIP_LOADING':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: true }
      };
    case 'DELETE_TRIP_SUCCESS':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, list: state.mytrips.list.filter(e => e.id !== action.payload) }
      };
    case 'DELETE_TRIP_ERROR':
      return {
        ...state,
        mytrips: { ...state.mytrips, loading: false, error: action.payload }
      };

    default:
      return state;
  }
}


//const removeTripById = id => trips.splice(trips.findIndex(trip => trip.id == id), 1)

// every reducer will return a discrete property of the state, regardless of how many conditions are inside that reducer.
