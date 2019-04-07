import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from '@Models';

const logger = createLogger({
    collapsed: true
});
const middleware = composeWithDevTools(applyMiddleware(logger, reduxThunk));


// const store = createStore(rootReducer, {}); En el Store tengo ya los metodos de redux. 
// El segundo parametro es el estado inicial. El tercer parametro son los middlewares:

const store = createStore(allReducers, {}, middleware);
export const Store = store;
