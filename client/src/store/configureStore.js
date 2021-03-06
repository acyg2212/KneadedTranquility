import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from './auth';
import appointmentBooking from "./appointmentBooking";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    auth,
    appointmentBooking,
});

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};

export default configureStore;