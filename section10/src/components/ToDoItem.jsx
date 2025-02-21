import './ToDoItem.css'
import { memo } from 'react';

const ToDoItem = ({ id, content, date, isDone, onUpdate, onDelete }) => {
    
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

// export default memo(ToDoItem, (prevProps, nextProps) => {
//     if (prevProps.id !== nextProps.id) {
//         return false;
//     }
//     if (prevProps.content !== nextProps.content) {
//         return false;
//     }
//     if (prevProps.date !== nextProps.date) {
//         return false;
//     }
//     if (prevProps.isDone !== nextProps.isDone) {
//         return false;
//     }
//     return true;
// });

export default ToDoItem