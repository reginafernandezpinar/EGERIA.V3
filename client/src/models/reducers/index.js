import { combineReducers } from 'redux';
import { tripReducer } from './trips/trip.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';
import { trackpointsReducer } from './trackpoints/trackpoints.reducer';
import { reducer as toastrReducer } from 'react-redux-toastr';


export const allReducers = combineReducers({
    trips: tripReducer,
    categories: categoriesReducer,
    user: userReducer,
    trackpoints: trackpointsReducer,
    toastr: toastrReducer // <- We need to add this reducer since the toastr library need this in order to work.
});