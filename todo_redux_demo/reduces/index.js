/**
 * Created by xiaosong 2017/09/01
 * **/

import { combineReducers } from 'redux';
import todos from './todos.js';
import visibilityFilter from './VisibilityFilter.js';

const TodoApp = combineReducers({
	todos,
	visibilityFilter
})

export default TodoApp