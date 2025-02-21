import './ToDoItem.css'
import { memo } from 'react';
import { useContext } from 'react';
import { ToDoDispatchContext } from '../App';

const ToDoItem = ({ id, content, date, isDone}) => {
    const { onUpdate, onDelete } = useContext(ToDoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }
    
    return <div className='ToDoItem'>
        <input onChange={onChangeCheckbox} readOnly className='checkbox' type='checkbox' checked={isDone}></input>
        <div className='content'>{content}</div>
        <div className='date'>{date}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
}

export default memo(ToDoItem)