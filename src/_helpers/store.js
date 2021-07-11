import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authentication from '../redux/reducers/authentication.reducer';

const loggerMiddleware = createLogger();

export const store = createStore(
    authentication,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);