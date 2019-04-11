import axios from 'axios';

// ======================= API USER ENDPOINTS ================================
const API_BASE_URL = '/api/auth';
const API_POST_REGISTER_URL = '/register';
const API_POST_LOGIN_URL = '/login';



// ------------------------- USER REGISTER -----------------------

// ACTION CREATORs
export const registerUserSuccess = () => ({ payload, type: 'REGISTER_USER' });
export const registerUserLoading = payload => ({ payload, type: 'REGISTER_USER_LOADING' });
export const registerUserError = payload => ({ payload, type: 'REGISTER_USER_ERROR' });


// THUNK
export const registerUser = filters => dispatch => {
    dispatch(registerUserLoading(true));
    //Axios request:
    axios
        .post({ 
            url: `${API_BASE_URL}${API_POST_REGISTER_URL}`,
            form: { username, password, email }
        })
        .then(response => {
            dispatch(registerUserSuccess(response.data)); // we just need the 'data' key from axios response
        })
        .catch(error => {
            dispatch(registerUserError(error));
        });
};


// -------------------------  USER LOGIN -----------------------

// ACTION CREATORs
export const loginUser = () => ({ payload, type: 'LOGIN_USER' });