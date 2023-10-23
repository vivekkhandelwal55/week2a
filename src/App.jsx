import React, { useEffect, useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/ToDoList';
import Tabs from './component/TabSection';
import arrayRemove from './constant/const';
import Tab from './component/Tab';
import DeleteButton from './component/DeleteButton';
import Header from './component/Header';


function App() {
  const TODO_KEY = 'todos'
  const [todoList, setTodoList] = useState(getInitalTodos())
  const [filterList, setFilterList] = useState(getInitalTodos())
  const [selectedTab, setSelectedTab] = useState(Tab.All);


  
  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  }, [todoList, filterList])


  function getInitalTodos() {
    const items = JSON.parse(localStorage.getItem(TODO_KEY))
    return items || [];
  }

  function addTodo(todo) {
    let todos = [...todoList, todo];
    setTodoList(todos);
    setFilterList(todos);
  }

  function deleteTodos(todo) {
    setTodoList(arrayRemove(todoList, todo));
    setFilterList(arrayRemove(todoList, todo));
  }

  function updateTodos(todo) {
    todoList.forEach((e, ind) => {
      if (e.id === todo.id) {
        let temp = todoList;
        temp[ind] = todo;
        setTodoList(temp);
        setFilterList(temp);
        console.log(todoList);
      }
    })
  }

  function changeSelectedTab(tab) {
    setSelectedTab(tab);
    if (tab === Tab.All) {
      setFilterList(todoList);
    } else if (tab === Tab.Active) {
      setFilterList(todoList.filter(todo => !todo.completed));
    } else if (tab === Tab.Completed) {
      setFilterList(todoList.filter(todo => todo.completed));
    }
  }

  function deleteAllTodos() {
    setTodoList(todoList.filter((e) => !e.completed));
    setFilterList(todoList.filter((e) => !e.completed));
  }

  return (
    <div className='template'>
      <Header />
      <Tabs changeSelectedTab={changeSelectedTab} />
      <TodoForm addTodo={addTodo} />
      <TodoList todoList={filterList} deleteTodos={deleteTodos} updateTodo={updateTodos} tab={selectedTab} />
      <DeleteButton tab={selectedTab} onClick={deleteAllTodos} />
    </div>
  );
}

export default App;
