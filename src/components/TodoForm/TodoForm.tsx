import React from 'react'
import { todoFormPropsType, difficultyType } from '../../types'
import { Link } from 'react-router-dom'
import './TodoForm.css'

export default function TodoForm({todo, deleteTodo, toggleTodoDone}:todoFormPropsType) {
  return (
    <>
      <article className="algo-todo">
        <input
          className='algo-todo-done-box'
          type="checkbox" 
          name={`algo${todo.id}`}
          id={`algo${todo.id}`}
          checked={todo.done}
          onChange={() => {
            toggleTodoDone(todo.id)
          }}
        />
        <div
          className='algo-todo-content'
        >
          <Link
            to={`/problems/${todo.id}`}
            className='algo-todo-title'
          >
            {todo.title}
          </Link>
          <div
            className='algo-todo-tags'
          >
            <span className='algo-todo-tag'>
              {todo.category}
            </span>
            <span className='algo-todo-tag'>
              {difficultyType[todo.difficulty]}
            </span>
          </div>
        </div>
        <button
          className='algo-todo-delete-btn'
          onClick={() => {
            deleteTodo(todo.id)
          }}
        >
          삭제
        </button>
      </article>
    </>
  )
}
