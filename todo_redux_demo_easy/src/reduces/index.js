/**
 * Created by xiaosong 2017/09/25
 */

import {
	applyMiddleware,
	compose,
	combineReducers,
	createStore as createReduxStore
} from 'redux';
import todos from './todos.js';
import VisibilityFilter from './VisibilityFilter.js';



const createStore = (initialState = {}) => {
	const todoApp = combineReducers({
		todos,
		VisibilityFilter
	})
	const store = createReduxStore(
		todoApp,
		initialState,
	)
	return store
}

export default createStore;