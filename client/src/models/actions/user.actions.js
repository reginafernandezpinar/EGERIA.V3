import axios from 'axios';
import {toastr} from 'react-redux-toastr'

// ======================= API USER AUTHORIZATION AND AUTHENTICATION ENDPOINTS ================================
const API_BASE_URL = '/api/auth';
const API_POST_REGISTER_URL = '/register';
const API_POST_LOGIN_URL = '/login';



// ------------------------- USER REGISTER -----------------------

// ACTION CREATORs
export const registerUserSuccess = () => ({ type: 'REGISTER_USER_SUCCESS' });
export const registerUserLoading = () => ({ type: 'REGISTER_USER_LOADING' });
export const registerUserError = payload => ({ payload, type: 'REGISTER_USER_ERROR' });


// THUNK
export const registerUser = registerData => dispatch => {
    dispatch(registerUserLoading());
    //Axios request:
    axios
        .post(`${API_BASE_URL}${API_POST_REGISTER_URL}`, registerData)
        .then( () => {
            dispatch(registerUserSuccess());

        })
        .catch(error => {
            dispatch(registerUserError(error));
            toastr.error('There was an error in the request', error);
        });
};


// -------------------------  USER LOGIN -----------------------

// ACTION CREATORs
export const loginUserSuccess= payload => ({payload, type: 'LOGIN_USER_SUCCESS' });
export const loginUserLoading= () => ({ type: 'LOGIN_USER_LOADING' });
export const loginUserError= payload => ({ payload, type: 'LOGIN_USER_ERROR' });

// THUNK
export const loginUser = loginData => dispatch => {
    dispatch(loginUserLoading());
    //Axios request:
    axios
        .post(`${API_BASE_URL}${API_POST_LOGIN_URL}`, loginData)
        .then(response => {
            dispatch(loginUserSuccess(response.data));
        })
        .catch(error => {
            dispatch(loginUserError(error));
            toastr.error('The user credentials are not correct');
        });
};