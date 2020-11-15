import { moviesReducer } from './movies/movies.reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  moviesReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const dispatch = () => store.dispatch;
