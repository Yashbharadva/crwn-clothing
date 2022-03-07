//Connect redux-think with redux project
import {createStore, applyMiddleware} from 'redux'; //(1)import middleware
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk'; //(2)import thunk
import rootReducer from './root-reducer';

const middlewares = [thunk]; 
if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//(3)use applyMiddleware in create store function
//(4)pass thunk in applyMiddleware function
export const persistor = persistStore(store);

export default {store, persistStore}; 