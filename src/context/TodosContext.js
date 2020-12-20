import React, { useState, createContext } from 'react'

export const TodosContext = createContext()

export function TodosProvider(props) {
 const [todos, setTodos] = useState([])

 return (
  <TodosContext.Provider value={[todos, setTodos]}>
   {props.children}
  </TodosContext.Provider>
 )
}