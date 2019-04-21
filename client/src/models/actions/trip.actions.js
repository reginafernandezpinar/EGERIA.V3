import axios from 'axios';
import { toastr } from "react-redux-toastr";


// ======================= API TRIPS ENDPOINTS ================================

const API_BASE_URL = '/api/'; // si tenemos el proxi tendremos q dejar este endpoint

const API_GET_ALL_TRIPS_URL = 'trips';
const API_GET_TRIP_URL = 'trips/';

const API_GET_USER_TRIPS_URL = 'trips/user/trips';
const API_DELETEorUPDATE_TRIP_URL = 'trips/';
const API_CREATE_TRIP_URL = 'trips/new';



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
      dispatch(getAllTripsSuccess(response.data)); //'data' is the response provided by the server
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


// ----------------------------- SEARCH A TRIP ---------------------------------

export const setSearchTripResults = payload => ({ payload, type: 'SET_SEARCH_TRIP_RESULTS' });



// =========================== TRIP CRUD =======================================

// --------------------- Get all trips from an user ---------------------------
// ACTION CREATORs
export const getUserTripsSuccess = payload => ({ payload, type: 'GET_USER_TRIPS_SUCCESS' });
export const getUserTripsLoading = payload => ({ payload, type: 'GET_USER_TRIPS_LOADING' });
export const getUserTripsError = payload => ({ payload, type: 'GET_USER_TRIPS_ERROR' });

// THUNK
export const getUserTrips = token => dispatch => {
  dispatch(getUserTripsLoading());
  //Axios request:
  axios({
          method: 'get',
          url: `${API_BASE_URL}${API_GET_USER_TRIPS_URL}`,
          headers: {
              Authorization: token
          }
      })
      .then(response => {
          dispatch(getUserTripsSuccess(response.data));
      })
      .catch(error => {
          dispatch(getUserTripsError(error));
      });
};

// ---------------------  Create a new trip as an user --------------------- 
// ACTION CREATORs
export const createTripSuccess = payload => ({ payload, type: 'CREATE_TRIP_SUCCESS' });
export const createTripLoading = payload => ({ payload, type: 'CREATE_TRIP_LOADING' });
export const createTripError = payload => ({ payload, type: 'CREATE_TRIP_ERROR' });

// THUNK
export const createTrip = (token, trip) => dispatch => {
  dispatch(createTripLoading());
  //Axios request:
  axios({
    method: 'post',
    url: `${API_BASE_URL}${API_CREATE_TRIP_URL}`, 
    data: trip,
    headers: {
      Authorization: token
    }
  })
  .then( (response) => {
      dispatch(createTripSuccess(response.data));
      toastr.success('A new trip has been successfully created!');
  })
  .catch(error => {
      dispatch(createTripError(error));
  });
};



// ---------------------  Delete a trip as an user --------------------- 
// ACTION CREATORs
export const deleteTripSuccess = payload => ({ payload, type: 'DELETE_TRIP_SUCCESS' });
export const deleteTripLoading = payload => ({ payload, type: 'DELETE_TRIP_LOADING' });
export const deleteTripError = payload => ({ payload, type: 'DELETE_TRIP_ERROR' });

// THUNK
export const deleteTrip = (token, tripId) => dispatch => {
  dispatch(deleteTripLoading());
  //Axios request:
  axios({
    method: 'delete',
    url: `${API_BASE_URL}${API_DELETEorUPDATE_TRIP_URL}${tripId}`,
    headers: {
      Authorization: token
    }
  })
  .then( () => {
      dispatch(deleteTripSuccess(tripId));
      toastr.success('Trip removed successfully!');
  })
  .catch(error => {
      dispatch(deleteTripError(error));
      toastr.error('There was an error with the request');
  });
};


// ---------------------  Update a trip as an user --------------------- 
// ACTION CREATORs
export const updateTripSuccess = payload => ({ payload, type: 'UPDATE_TRIP_SUCCESS' });
export const updateTripLoading = payload => ({ payload, type: 'UPDATE_TRIP_LOADING' });
export const updateTripError = payload => ({ payload, type: 'UPDATE_TRIP_ERROR' });

// THUNK
export const updateTrip = (token, trip) => dispatch => {
  dispatch(updateTripLoading());
  //Axios request:
  axios({
    method: 'patch',
    url: `${API_BASE_URL}${API_DELETEorUPDATE_TRIP_URL}${trip.id}`,
    data: trip,
    headers: {
      Authorization: token
    }
  })
  .then( (response) => {
      toastr.success('Trip updated successfully!');
      dispatch(updateTripSuccess(trip));
  })
  .catch(error => {
      dispatch(updateTripError(error));
      toastr.error('There was a problem with the request');
  });
};


// ------------- Select a trip action creator to use in UPDATE and DELETE TRIP
export const setSelectedTrip = payload => ({ payload, type: 'SET_SELECTED_TRIP' });






// ======================= AXIOS REQUEST FUNCTION for getTripsRequest() =============================

function getTripsRequest(filters = {}) {
  const url = `${API_BASE_URL}${API_GET_ALL_TRIPS_URL}?`;
  let urlParams = Object.keys(filters).reduce((total, param) => {
    return `${total}${param}=${filters[param]}&`;
  }, '');
  urlParams = urlParams.substr(0, urlParams.length - 1); // remove the & at the end.
  return axios.get(`${url}${urlParams}`);
};