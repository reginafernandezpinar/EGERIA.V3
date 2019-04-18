import { initialUserState } from "./user.state";

import { saveToken, deleteToken } from "../../../tools";


export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "REGISTER_USER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        registerSuccessful: true
      };
    case "REGISTER_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "LOGIN_USER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "LOGIN_USER_ERROR":
      
      return {
        ...state,
        loading: false,
        error: action.payload
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

    case "LOGOUT_USER":      
      deleteToken();
      return {
        initialUserState
      };
    default:
      return state;
  }
}
