import React from 'react'
import AgregarTodo from "../AgregarTodo/AgregarTodo"
import TodoList from '../TodoList/TodoList'
import { TodosProvider } from '../../context/TodosContext';
import "./App.css"

function App() {
  return (
    <div className="app">
      <TodosProvider>
        <AgregarTodo />
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
