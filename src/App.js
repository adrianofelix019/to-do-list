import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Aprender React' },
    { text: 'Ir a academia' },
    { text: 'Construir uma aplicação legal' }
  ])

  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
