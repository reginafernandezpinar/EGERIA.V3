import axios from 'axios';

// ======================= API USER ENDPOINTS ================================
const API_BASE_URL = '/api/auth';
const API_POST_REGISTER_URL = '/register';
const API_POST_LOGIN_URL = '/login';



// ------------------------- USER REGISTER -----------------------

// ACTION CREATORs
export const registerUserSuccess = payload => ({ payload, type: 'REGISTER_USER_SUCCESS' });
export const registerUserLoading = payload => ({ payload, type: 'REGISTER_USER_LOADING' });
export const registerUserError = payload => ({ payload, type: 'REGISTER_USER_ERROR' });


// THUNK
export const registerUser = registerData => dispatch => {
    dispatch(registerUserLoading(true));
    //Axios request:
    axios
        .post({ 
            url: `${API_BASE_URL}${API_POST_REGISTER_URL}`, registerData
        })
        .then(response => {
            dispatch(registerUserSuccess(true)); // this is to change... ?
        })
        .catch(error => {
            dispatch(registerUserError(error));
        });
};


// -------------------------  USER LOGIN -----------------------

// ACTION CREATORs
export const loginUserSuccess= () => ({ payload, type: 'LOGIN_USER_SUCCESS' });
export const loginUserLoading= () => ({ payload, type: 'LOGIN_USER_LOADING' });
export const loginUserError= () => ({ payload, type: 'LOGIN_USER_ERROR' });

// THUNK
export const loginUser = loginData => dispatch => {
    dispatch(loginUserLoading(true));
    //Axios request:
    axios
        .post({ 
            url: `${API_BASE_URL}${API_POST_LOGIN_URL}`, loginData
        })
        .then(response => {
            dispatch(loginUserSuccess(response.data)); // this is to change... ?
        })
        .catch(error => {
            dispatch(loginUserError(error));
        });
};