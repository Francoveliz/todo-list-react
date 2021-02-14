import React, { useState, useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import { nanoid } from "nanoid"
import "./AgregarTodo.css"

function AgregarTodo() {
 const [todos, setTodos] = useContext(TodosContext)
 const [todo, setTodo] = useState("")
 const todoTextHandler = e => {
  setTodo(e.target.value)
 }
 const onSubmitHandler = e => {
  e.preventDefault()
  if (todo !== "") {
   setTodos(prevTodos => [...prevTodos, {
    todo,
    id: nanoid(),
    isChecked: false
   }])
  }
  setTodo("")
 }
 return (
  <form onSubmit={onSubmitHandler} className="form-container">

   <input type="text" value={todo} onChange={todoTextHandler} placeholder="Nueva tarea" className="input-todo" />

   <button variant="contained" color="primary" type="submit" className="btn-agregar">Agregar</button>
  </form>
 )
}

export default AgregarTodo
