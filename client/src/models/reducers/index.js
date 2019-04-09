import { combineReducers } from 'redux';
import { tripReducer } from './trips/trip.reducer';
import { categoriesReducer } from './categories/categories.reducer';

export const allReducers = combineReducers({
    trips: tripReducer,
    categories: categoriesReducer
});