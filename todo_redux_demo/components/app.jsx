/**
 * Created by xiaosong 2017/09/01
 * **/

import React from 'react';
import Top from './Top.jsx';
import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import './style.css';

const App = () => (
    <div className="todo-box">
        <div className="todo-innerBox">
           <Top />
           <AddTodo />
           <VisibleTodoList />
        </div>
    </div>
)

export default App