import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allReducers } from '../reducers';
import thunk from 'redux-thunk';

const logger = createLogger({
  collapsed: true
});

// preloaded State
const preloadedState = {};

const store = createStore(
  allReducers,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    ),
  )
)
export const Store = store;