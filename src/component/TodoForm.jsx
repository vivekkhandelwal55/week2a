import React, { useState } from 'react';
import "../styles/style.css"
import Tab from './Tab';

export default function TodoForm({ addTodo, tab }) {
    const [isActive, setIsActive] = useState(false);
    const [todo, setTodo] = useState();


    function handleClassBasedOnTab() {
        if (tab != Tab.Completed) {
            return "container";
        } else {
            return "container hide";
        }
    }


    function handleSubmit(e) {
        if (todo !== "") {
            addTodo({
                text: todo,
                completed: false,
                id: (Math.random() + 1).toString(5).substring(2)
            });
            setTodo("")
            setIsActive(false);
        }
        e.preventDefault();
    }

    function handleOnChangeOfInput(e) {
        if (e.target.value === "") {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
        setTodo(e.target.value)
    }


    return (
        <form >
            <div className={handleClassBasedOnTab()}>
                <div className="input-col">
                    <input
                        className="text-area"
                        name='choreDesc'
                        type='text'
                        value={todo}
                        placeholder='Add Todo'
                        onChange={e => { handleOnChangeOfInput(e) }} />
                    <button
                        type="button"
                        className="button-input"
                        onClick={handleSubmit}
                        disabled={!isActive}
                        style={{ background: isActive ? '#2F80ED' : '#76a3df' }}>Add Todo</button>
                </div>
            </div>
        </form>
    )
}