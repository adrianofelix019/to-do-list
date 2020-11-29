import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

export default () => {
  const [todos, setTodos] = useState([
    {
      text: 'Aprender React',
      isCompleted: false
    },
    {
      text: 'Ir a academia',
      isCompleted: false
    },
    {
      text: 'Construir uma aplicação',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}
