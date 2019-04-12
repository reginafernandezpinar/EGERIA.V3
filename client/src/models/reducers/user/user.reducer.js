import { initialUserState } from './user.state';

export function userReducer(state = initialUserState, action) { //recibe el estado global por defecto y la accion 
  switch (action.type) {
    case 'REGISTER_USER_LOADING':
      return {
        ...state,
        loading: true
      };
      case 'REGISTER_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        register: true
      };
      case 'REGISTER_USER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      default:
      return state; 
    }
}



        // token: action.payload.token,
        // username: action.payload.username,
        // email: action.payload.email