import { initialUserState } from "./user.state";

import { saveToken, deleteToken } from "../../../tools";
import { toastr } from "react-redux-toastr";

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
      toastr.error("There was an error in the request");
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
      toastr.error("ups! Your email or password is not correct");
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
        email: action.payload.email
      };

    case "LOGOUT_USER_LOADING":
      return {
        ...state,
        loading: true
      };

    case "LOGOUT_USER":
      deleteToken();
      return {
        ...state,
        loading: false,
        token: null,
        name: null,
        email: null
      };
    default:
      return state;
  }
}
