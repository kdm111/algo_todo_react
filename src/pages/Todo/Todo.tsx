import React from 'react'
import Navbar from '../../components/Navbar.js/Navbar'
import react, {useState, useEffect} from 'react'
import TodoForm from '../../components/TodoForm/TodoForm';
import { todoType } from '../../types'
import './Todo.css'

export default function Todo() {
  const [allTodo, setAllTodo] = useState<todoType[]>([])
  useEffect(() => {
    setAllTodo([
      {
        id : 1,
        title : "algo1",
        done : false,
        category : '배열',
        difficulty : 1,
      },
      {
        id : 2,
        title : "algo2",
        done : true,
        category : '문자열',
        difficulty : 0,
      },
      {
        id : 3,
        title : "algo3",
        done : false,
        category : '그래프',
        difficulty : 2,
      },
      {
        id : 4,
        title : "algo4",
        done : true,
        category : '다이나믹 프로그래밍',
        difficulty : 1,
      },
      {
        id : 5,
        title : "algo5",
        done : true,
        category : '스택',
        difficulty : 1,
      },
    ])
  }, [])
  const deleteTodo = (deleteId: number): void => {
    setAllTodo((allTodo) => {
      return allTodo.filter((el) => {
        return el.id !== deleteId
      })
    })
  }
  const toggleTodoDone = (toggleId:number):void => {
    setAllTodo((allTodo) => {
      return allTodo.map((el) => {
        if (el.id === toggleId) {
          return {...el, done : !el.done}
        } else {
          return el
        }
      })
    })
  }
  return (
    <>
      <Navbar />
      <section 
        className='todo-container'
        >
        <h1 className='todo-title'>Todo</h1>
        {
          allTodo.map((el) => {
            return (
              <TodoForm
                key={el.id}
                todo={el}
                deleteTodo={deleteTodo}
                toggleTodoDone={toggleTodoDone}
              />
            )
          })
        }
      </section>
    </>
  )
}
