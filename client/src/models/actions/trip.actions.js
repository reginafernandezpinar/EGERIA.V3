import axios from 'axios';


// ======================= API TRIPS ENDPOINTS ================================

const API_BASE_URL = '/api/'; // si tenemos el proxi tendremos q dejar este endpoint
const API_GET_ALL_TRIPS_URL = 'trips';
const API_GET_TRIP_URL = 'trips/';

// ------------------------- GET FEATURED/ALL TRIPS -----------------------

// ACTION CREATORs
export function getAllTripsSuccess (payload) {
  return { payload, type: 'GET_ALL_TRIPS_SUCCESS' }
}; //will be called when the data has been successfully fetched
export const getAllTripsLoading = payload => ({ payload, type: 'GET_ALL_TRIPS_LOADING' });
export const getAllTripsError = payload => ({ payload, type: 'GET_ALL_TRIPS_ERROR' });

// THUNK
// action creator that returns(dispatch) the other action creators(functions instead of an object) after an API call
export const getAllTrips = filters => dispatch => {
  dispatch(getAllTripsLoading(true));
  //Axios request:
  getTripsRequest(filters)
    .then(response => {
      dispatch(getAllTripsSuccess(response.data)); // we just need the 'data' key from axios response
    })
    .catch(error => {
      dispatch(getAllTripsError(error));
    });
};

// ----------------------------- GET ALL TRIPS BY CATEGORY --------------------------------

// ACTION CREATORs
export const getTripsCategoryLoading = payload => ({ payload, type: 'GET_TRIPS_CATEGORY_LOADING' });
export const getTripsCategoryError = payload => ({ payload, type: 'GET_TRIPS_CATEGORY_ERROR' });
export const getTripsCategorySuccess = payload => ({ payload, type: 'GET_TRIPS_CATEGORY_SUCCESS' }); //will be called when the data has been successfully fetched

// THUNK
export const getTripsCategory = filters => dispatch => {
  dispatch(getTripsCategoryLoading(true));
  // Axios request:
  getTripsRequest(filters)
    .then(response => {
      dispatch(getTripsCategorySuccess(response.data));
    })
    .catch(error => {
      dispatch(getTripsCategoryError(error));
    });
};


// ----------------------------- GET A TRIP --------------------------------

// ACTION CREATORs
export const getTripSuccess = payload => ({ payload, type: 'GET_TRIP_SUCCESS' });
export const getTripLoading = payload => ({ payload, type: 'GET_TRIP_LOADING' });
export const getTripError = payload => ({ payload, type: 'GET_TRIP_ERROR' });

// THUNK
export const getTrip = tripId => dispatch => {
  dispatch(getTripLoading(true));
  axios
    .get(`${API_BASE_URL}${API_GET_TRIP_URL}${tripId}`)
    .then(response => {
      dispatch(getTripSuccess(response.data));
    })
    .catch(error => {
      dispatch(getTripError(error));
    });
};


// ----------------------------- SEARCH A TRIP --------------------------------
export const searchTrip = payload => ({ payload, type: 'SEARCH_TRIP' });


// ======================= AXIOS REQUEST FUNCTION for getTripsRequest() =============================

function getTripsRequest(filters = {}) {
  const url = `${API_BASE_URL}${API_GET_ALL_TRIPS_URL}?`;
  let urlParams = Object.keys(filters).reduce((total, param) => {
    return `${total}${param}=${filters[param]}&`;
  }, '');
  urlParams = urlParams.substr(0, urlParams.length - 1); // remove the & at the end.
  return axios.get(`${url}${urlParams}`);
};