/**
 * Created by xiaosong 2017/09/18
 * **/

import { applyMiddleware, compose, combineReducers, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import todos from './todos.js';
import visibilityFilter from './VisibilityFilter.js';

const createStore = (initialState = {}) => {
    const middleware = [thunk]      //中间件的一个流程，此案例没用，可以直接用redux带的createStore
    const todoApp = combineReducers({
        todos,
        visibilityFilter
    })
    const store = createReduxStore(
        todoApp,
        initialState,
        applyMiddleware(...middleware)
    )
    return store
}

export default createStore