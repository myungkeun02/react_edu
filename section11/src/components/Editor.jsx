import './Editor.css'
import {useState, useRef, useContext } from "react"
import { ToDoDispatchContext } from '../App';


const Editor = () => {
    const  { onCreate } = useContext(ToDoDispatchContext);
    const [content, setContent] = useState(""); 
    
    const contentRef = useRef();
    
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if (content == "") {
            contentRef.current.focus()
            return;
        }
        onCreate(content)
        setContent("");
    }

    return <div className="Editor">
        <input 
            ref={contentRef}
            value={content}
            onKeyDown={onKeyDown}
            onChange={onChangeContent} 
            placeholder="새로운 할 일 ..."
            ></input>
        <button 
            onClick={onSubmit}
            >추가</button>
    </div>;
}

export default Editor;