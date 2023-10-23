import React, { useState } from "react";
import Tab from "./Tab";

export default function Todo({ todo, updateTodo, deleteTodo ,key,tab}){

    const [isChecked,setIsChecked] = useState(todo.completed);


    function update(todo){
        todo.completed = !todo.completed;
        setIsChecked(todo.completed);
        updateTodo(todo);
    }

    function handleDeleteIconClassOnTab(){
        var className = "material-icons delete-item-button";
        if(tab==Tab.Active|| tab==Tab.All){
            className += " hide"
        }
        return className;
    }

    return (
        <li className='todo-item' key={key}>
            <div className="item">
                <div className="leading">
                    <input key={todo.id} type="checkbox" className="check-button" checked={isChecked} onChange={() => update(todo)}></input>
                    <span>{todo.text}</span>
                </div>
                <i className={handleDeleteIconClassOnTab()} onClick={() => deleteTodo(todo)}>delete</i>
            </div>
        </li>
    )
}