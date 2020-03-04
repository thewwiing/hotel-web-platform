import {applyMiddleware, createStore, compose} from 'redux';
import logger from 'redux-logger';
import {customMiddleware} from "./middleware";
import rootReducer from "./reducers";

const middleware = [customMiddleware, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
