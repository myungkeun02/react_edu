import './styles/App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/even'
import { useState, useEffect, useRef } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 사이드 이펙트
  useEffect(() => {
    console.log("maunt")
  }, [])

  // 2. 업데이트 사이드 이펙트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  })

  // 3. 언마운트 사이드 이펙트


  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
      <div className='App'>
        <h1>Counter Application</h1>
        <section>
          <input value={input} onChange={(e)=> {
            setInput(e.target.value)
          }}></input>
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 == 0 ? <Even /> : null}
        </section>
        <section>
          <Controller onClickButton ={onClickButton}/>
        </section>
      </div>
  )
}

export default App
