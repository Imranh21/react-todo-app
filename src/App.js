import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <TodoForm inputValue={inputValue} setInputValue={setInputValue} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
