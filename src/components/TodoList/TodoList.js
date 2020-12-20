import React, { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import Todo from "../Todo/Todo"
import "./TodoList.css"

function TodoList() {
 const [todos, setTodos] = useContext(TodosContext)

 return (
  <div className="todo-list">
   {todos.map(todo => (
    <Todo texto={todo.todo} id={todo.id} isChecked={todo.isChecked} />
   ))}
  </div>
 )
}

export default TodoList
