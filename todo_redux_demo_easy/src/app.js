/**
 * Created by xiaosong 2017/09/25
 */

import React from 'react';
import Top from './components/Top.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import './components/style.css';


export default class App extends React.Component {
	render() {
		return (
			<div className="todo-box">
        		<div className="todo-innerBox">
					<Top />
					<AddTodo />
					<TodoList />
				</div>
			</div>
			
		)
	}
}