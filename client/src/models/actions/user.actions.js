import axios from 'axios';
import { toastr } from "react-redux-toastr";

// ======================= API USER AUTHORIZATION AND AUTHENTICATION ENDPOINTS ================================
const API_BASE_URL = '/api/auth';
const API_POST_REGISTER_URL = '/register';
const API_POST_LOGIN_URL = '/login';
const API_GET_WHOAMI_URL = '/whoAmI'



// ------------------------- USER REGISTRATION -----------------------

// ACTION CREATORs
export const registerUserSuccess = (payload) => ({payload, type: 'REGISTER_USER_SUCCESS' });
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
            toastr.error("There was an error in the request");
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
            toastr.error("ups! Your email or password is not correct");
        });
};



// -------------------------  GET USER DATA - whoAmI ------------------------
// get user data once the user is login and token is saved in Session Storage, so we can use them in case page is reloaded.

// ACTION CREATORs 
// we will use login reducers as we want to modified the Store in the same way login reducers do.
export const whoAmISuccess= payload => ({payload, type: 'WHO_AM_I_SUCCESS' });
export const whoAmILoading= () => ({ type: 'WHO_AM_I_LOADING' });
export const whoAmIError= payload => ({ payload, type: 'WHO_AM_I_ERROR' });

// THUNK
export const whoAmI = token => dispatch => {
    dispatch(whoAmILoading());
    //Axios request:
    axios({
            method: 'get',
            url: `${API_BASE_URL}${API_GET_WHOAMI_URL}`,
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            dispatch(whoAmISuccess(response.data));
        })
        .catch(error => {
            dispatch(whoAmIError(error));
        });
};



// -------------------------  USER LOGOUT -----------------------

// ACTION CREATORs
export const logoutUser = () => ({ type: 'LOGOUT_USER' });

