import { combineReducers } from 'redux';
import { rootReducer } from './root.reducer';

export const allReducers = combineReducers ({
    rootReducer, 
})

// Aqui puedo añadir otross tipos de reducers