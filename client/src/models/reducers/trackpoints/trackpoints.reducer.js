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


    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_LOADING':
      return {
        ...state,
        tripId: { ...state.tripId, loading: true }
      };
    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_SUCCESS':
      return {
        ...state,
        tripId: { ...state.tripId, loading: false, list: action.payload }
      };
    case 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_ERROR':
      return {
        ...state,
        tripId: { ...state.tripId, loading: false, error: action.payload }
      };


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


    case 'GET_TRACKPOINTS_CATEGORY_LOADING':
      return {
        ...state,
        category: { ...state.type, loading: true }
      };
    case 'GET_TRACKPOINTS_CATEGORY_SUCCESS':
      return {
        ...state,
        category: { ...state.category, loading: false, list: action.payload }
      };
    case 'GET_TRACKPOINTS_CATEGORY_ERROR':
      return {
        ...state,
        category: { ...state.category, loading: false, error: action.payload }
      };

    default:
      return state;
  }
}