// src/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    // TODO: Add reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
