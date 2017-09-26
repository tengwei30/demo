/**
 * Created by xiaosong 2017/09/18
 * **/

import React from 'react';
import Todo from "./Todos.jsx";

const TodoList = ({ todos, onTodoClick, onDelClick}) => {
    console.log('TodoList',todos)
    return (
        <ul className="list-group">
            {
                todos.map( (todo) => {
                    return(
                            <Todo
                                key={todo.id}
                                {...todo}
                                onClick={() => onTodoClick(todo.id)}
                                onDelClick={() => onDelClick(todo.id)}
                            />
                        )
                })
            }
        </ul>
    )
}

export default TodoList;