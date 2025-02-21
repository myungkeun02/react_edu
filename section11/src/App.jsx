import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from "react";

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

export const ToDoStateContext = createContext();
export const ToDoDispatchContext = createContext();

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

  const memolizedDispatch = useMemo(() => {
    return {onCreate, onDelete, onUpdate}
  }, [])

  return (
    <div className='App'>
      <Header />
      <ToDoStateContext.Provider value={todos}>
        <ToDoDispatchContext.Provider value={memolizedDispatch}>
          <Editor />
          <List  />
        </ToDoDispatchContext.Provider>
      </ToDoStateContext.Provider>
    </div>
  )
}

export default App
