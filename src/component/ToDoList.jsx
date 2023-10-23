import React, { useEffect, useState } from 'react';
import Tab from './Tab';
import Todo from './Todo';


export default function ({ todoList, deleteTodos, updateTodo, tab }) {

    const [todos, setTodos] = useState(todoList)
    useEffect(() => {
        if (tab == Tab.Active) {
            setTodos(todoList.filter(todo => !todo.completed));
        } else if (tab == Tab.Completed) {
            setTodos(todoList.filter(todo => todo.completed));
        } else {
            setTodos(todoList);
        }
    }, [todoList])

    return (
        <ul>{
            todos.length != 0 ? todos.map(todo => <Todo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodos} key={todo.id} tab={tab}/>)
                : <li>List is Empty</li>}</ul>
    )
}