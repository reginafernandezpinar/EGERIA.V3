import { combineReducers } from 'redux';
import { tripReducer } from './trips/trip.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { userReducer } from './user/user.reducer';

export const allReducers = combineReducers({
    trips: tripReducer,
    categories: categoriesReducer,
    user: userReducer
});