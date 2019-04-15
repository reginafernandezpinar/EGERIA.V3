import { combineReducers } from 'redux';
import { tripReducer } from './trips/trip.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';
import { trackpointReducer } from './trackpoints/trackpoint.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';


export const allReducers = combineReducers({
    trips: tripReducer,
    categories: categoriesReducer,
    user: userReducer,
    trackpoint: trackpointReducer,
    toastr: toastrReducer // <- Mounted at toastr.
});