import React, { useState, useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'
import DeleteIcon from '@material-ui/icons/Delete';
import "./Todo.css"


function Todo(props) {
 const [todos, setTodos] = useContext(TodosContext)
 const { texto, id, isChecked } = props

 const handleChecked = () => {

  setTodos(prevTodos => prevTodos.map(el => {
   if (el.id == id) {
    el.isChecked = !isChecked
   }
   return el
  }))
 }

 const borrarTodo = () => {
  setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
 }

 return (
  <div className="todo">
   <input type="checkbox" onChange={handleChecked} checked={isChecked} />
   <p style={
    isChecked ? { textDecoration: "line-through" } : { textDecoration: "none" }
   }
   >{texto}</p>
   <button onClick={borrarTodo} className="btn-delete"><DeleteIcon color="primary"></DeleteIcon></button>
  </div>
 )
}

export default Todo
