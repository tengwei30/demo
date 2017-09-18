/**
 * Created by xiaosong 2017/09/18
 * **/

import React from 'react';
import {connect} from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";
import TodoList from "./TodoList.jsx";

const getVisibleTodos = (todos, filter) => {
    console.log('Visible',todos)
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onDelClick: (id)=> {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)