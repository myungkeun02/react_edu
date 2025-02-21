import './List.css'
import ToDoItem from './ToDoItem';
import { useState } from 'react';

const List = ({ onDelete, onUpdate, todos }) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().replace(/\s/g, "").includes(search.toLowerCase().replace(/\s/g, ""))
        )
    }

    const filterdTodos = getFilteredData();

    return <div className='List'>
        <h4>오늘 할일 🖥️</h4>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>
        <div className='todos_wrapper'>
            {filterdTodos.map((todo) => {
                return <ToDoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></ToDoItem>
            })}
        </div>
    </div>;
}

export default List;