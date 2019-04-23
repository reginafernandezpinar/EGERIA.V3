import { initialUserState } from "./user.state";

import { saveToken, deleteToken } from "../../../tools";


export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    // -------------- user registration --------------------- 
    case "REGISTER_USER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        registrationSuccessful: true
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    // ------------------ user login --------------------
    case "LOGIN_USER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN_USER_SUCCESS":
      saveToken(action.payload.token);
      return {
        ...state,
        loading: false,
        loginSuccessful: true,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      };

    // ----------- user whoIam ----------------------
    case "WHO_AM_I_SUCCESS": 
      return {
        ...state,
        loading: false,
        loginSuccessful: true,
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id
      };
    case "WHO_AM_I_ERROR": 
      return {
        ...state,
        loading: false,
        loginSuccessful: false,
        token: null,
        name: null,
        email: null,
        id: null
      };

    // ------------ user log out
    case "LOGOUT_USER":      
      deleteToken();
      return {
        initialUserState
      };
    default:
      return state;
  }
}
