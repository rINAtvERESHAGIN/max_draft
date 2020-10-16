import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [thunk, logger];
const defaultState = {};

const store = createStore(
    rootReducer,
    defaultState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);

export default store;
