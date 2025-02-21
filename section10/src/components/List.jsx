import './List.css'
import ToDoItem from './ToDoItem';
import { useState, useMemo } from 'react';

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

    const {totalCount, doneCount, notDoneCount}  = useMemo(() => {
        console.log('useMemo')
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone == true).length
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount}
    }, [todos])

    return <div className='List'>
        <h4>오늘 할일 🖥️</h4>
        <div>
            <div> total = {totalCount}</div>
            <div> done = {doneCount}</div>
            <div> not done = {notDoneCount}</div>
        </div>
        <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요"></input>
        <div className='todos_wrapper'>
            {filterdTodos.map((todo) => {
                return <ToDoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}></ToDoItem>
            })}
        </div>
    </div>;
}

export default List;