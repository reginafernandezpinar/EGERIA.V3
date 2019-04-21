import axios from 'axios';


// ======================= API TRACKPOINTS ENDPOINTS ================================

const API_BASE_URL = '/api/'; // si tenemos el proxi tendremos q dejar este endpoint
const API_GET_ALL_TRACKPOINTS_URL = 'trackpoints';
const API_GET_TRACKPOINT_URL = 'trackpoints/';



// ------------------------- GET ALL TRACKPOINTS (/ featured) -----------------------

// ACTION CREATORs
export const getAllTrackpointsSuccess = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_SUCCESS' });
export const getAllTrackpointsLoading = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_LOADING' });
export const getAllTrackpointsError = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_ERROR' });

// THUNK
export const getAllTrackpoints = filters => dispatch => {
  dispatch(getAllTrackpointsLoading(true));
  //Axios request:
  getTrackpointsRequest(filters)
    .then(response => {
      dispatch(getAllTrackpointsSuccess(response.data));
    })
    .catch(error => {
      dispatch(getAllTrackpointsError(error));
    });
};



// ------------------------- GET ALL TRACKPOINTS BY TRIP ID -----------------------

// ACTION CREATORs
export const getAllTrackpointsbyTripIdSuccess = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_SUCCESS' });
export const getAllTrackpointsbyTripIdLoading = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_LOADING' });
export const getAllTrackpointsbyTripIdError = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BY_TRIP_ID_ERROR' });

// THUNK
export const getAllTrackpointsbyTripId = filters => dispatch => {
  dispatch(getAllTrackpointsbyTripIdLoading(true));
  //Axios request:
  getTrackpointsRequest(filters)
    .then(response => {
      dispatch(getAllTrackpointsbyTripIdSuccess(response.data));
    })
    .catch(error => {
      dispatch(getAllTrackpointsbyTripIdError(error));
    });
};


// ----------------------------- GET A TRACKPOINT --------------------------------

// ACTION CREATORs
export const getTrackpointSuccess = payload => ({ payload, type: 'GET_TRACKPOINT_SUCCESS' });
export const getTrackpointLoading = payload => ({ payload, type: 'GET_TRACKPOINT_LOADING' });
export const getTrackpointError = payload => ({ payload, type: 'GET_TRACKPOINT_ERROR' });

// THUNK
export const getTrip = trackpointId => dispatch => {
  dispatch(getTrackpointLoading(true));
  axios
    .get(`${API_BASE_URL}${API_GET_TRACKPOINT_URL}${trackpointId}`)
    .then(response => {
      dispatch(getTrackpointSuccess(response.data));
    })
    .catch(error => {
      dispatch(getTrackpointError(error));
    });
};

// ----------------------------- SET SELECTED TRACKPOINT --------------------------------
export const setSelectedTrackpoint = payload => ({ payload, type: 'SET_SELECTED_TRACKPOINT' });


// ======================= AXIOS REQUEST FUNCTION for getTrackpointsRequest() =============================

function getTrackpointsRequest(filters = {}) {
  const url = `${API_BASE_URL}${API_GET_ALL_TRACKPOINTS_URL}?`;
  let urlParams = Object.keys(filters).reduce((total, param) => {
    return `${total}${param}=${filters[param]}&`;
  }, '');
  urlParams = urlParams.substr(0, urlParams.length - 1); // remove the & at the end.
  return axios.get(`${url}${urlParams}`);
};
