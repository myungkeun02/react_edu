import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef } from "react";

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

function App() {

  const [todos, setTodos] = useState(mockData);

  const idRef = useRef(5);

  const onCreate = (content) => {
    const newToDo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().toLocaleString()
    }

    setTodos([newToDo, ...todos])
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => 
        todo.id === targetId 
          ? {...todo, isDone: !todo.isDone}
         : todo
       )
     )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List onDelete={onDelete} onUpdate={onUpdate} todos={todos}/>
    </div>
  )
}

export default App
