import { initialTrackpointState } from './trackpoints.state';

export function trackpointsReducer(state = initialTrackpointState, action) {
  switch (action.type) {
    case 'GET_ALL_TRACKPOINTS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'GET_ALL_TRACKPOINTS_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    case 'GET_ALL_TRACKPOINTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

// ----------- Get all trackpoints by trip Id --------------
    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_LOADING':
      return {
        ...state,
        tripTrackpoints: { ...state.tripTrackpoints, loading: true }
      };
    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_SUCCESS':
      return {
        ...state,
        tripTrackpoints: { ...state.tripTrackpoints, loading: false, tripId: action.payload[0].trip_id, list: action.payload }
      };
    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_ERROR':
      return {
        ...state,
        tripTrackpoints: { ...state.tripTrackpoints, loading: false, error: action.payload }
      };

// ----------- Get a specific trackpoint --------------
    case 'GET_TRACKPOINT_LOADING':
      return {
        ...state,
        selected: { ...state.selected, loading: true }
      };
    case 'GET_TRACKPOINT_SUCCESS':
      return {
        ...state,
        selected: { ...state.selected, loading: false, trackpoint: action.payload }
      };
    case 'GET_TRACKPOINT_ERROR':
      return {
        ...state,
        selected: { ...state.selected, loading: false, error: action.payload }
      };

    case 'SET_SELECTED_TRACKPOINT':
      return {
        ...state,
        selected: {
          ...state.selected,
          trackpoint: state.list.find(e => e.id === action.payload)
        } 
      };

    default:
      return state;
  }
}