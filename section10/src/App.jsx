import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React Run",
    date: new Date().toLocaleString(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래",
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    isDone: false,
    content: "청소",
    date: new Date().toLocaleString(),
  },
  {
    id: 3,
    isDone: false,
    content: "자바 공부",
    date: new Date().toLocaleString(),
  },
  {
    id: 4,
    isDone: false,
    content: "CS 공부",
    date: new Date().toLocaleString(),
  },
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'CREATE':
      return [action.date, ...state]
    case 'UPDATE':
      return state.map((todo) => 
        todo.id === action.targetId 
          ? {...todo, isDone: !todo.isDone}
          : todo
      )
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.targetId)
    default:
      return state
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(5);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      date: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().toLocaleString()
      }
    })
  }, [])

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: 'UPDATE', targetId: targetId })
  }, [])

  const onDelete = useCallback( (targetId) => {
    dispatch({ type: 'DELETE', targetId: targetId })
  }, [])

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List onDelete={onDelete} onUpdate={onUpdate} todos={todos}/>
    </div>
  )
}

export default App
