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
export const getAllTrackpointsbyTripIdSuccess = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BYTRIPID_SUCCESS' });
export const getAllTrackpointsbyTripIdLoading = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BYTRIPID_LOADING' });
export const getAllTrackpointsbyTripIdError = payload => ({ payload, type: 'GET_ALL_TRACKPOINTS_BYTRIPID_ERROR' });
  
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



// ------------------------- GET ALL TRACKPOINTS BY CATEGORY -----------------------

// ACTION CREATORs
export const getTrackpointsCategorySuccess = payload => ({ payload, type: 'GET_TRACKPOINTS__CATEGORY_SUCCESS' });
export const getTrackpointsCategoryLoading = payload => ({ payload, type: 'GET_TRACKPOINTS__CATEGORY_LOADING' });
export const getTrackpointsCategoryError = payload => ({ payload, type: 'GET_TRACKPOINTS__CATEGORY_ERROR' });
  
// THUNK
export const getTrackpointsCategory = filters => dispatch => {
dispatch(getTrackpointsCategoryLoading(true));
//Axios request:
getTrackpointsRequest(filters)
    .then(response => {
    dispatch(getTrackpointsCategorySuccess(response.data));
    })
    .catch(error => {
    dispatch(getTrackpointsCategoryError(error));
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





// ======================= AXIOS REQUEST FUNCTION for getTrackpointsRequest() =============================

function getTrackpointsRequest(filters = {}) {
    const url = `${API_BASE_URL}${API_GET_ALL_TRACKPOINTS_URL}?`;
    let urlParams = Object.keys(filters).reduce((total, param) => {
      return `${total}${param}=${filters[param]}&`;
    }, '');
    urlParams = urlParams.substr(0, urlParams.length - 1); // remove the & at the end.
    return axios.get(`${url}${urlParams}`);
  };
  