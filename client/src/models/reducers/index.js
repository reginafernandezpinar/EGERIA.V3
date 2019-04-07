import { combineReducers } from 'redux';
import { tripReducer } from './trips/trip.reducer';

export const allReducers = combineReducers({
    trips: tripReducer
});