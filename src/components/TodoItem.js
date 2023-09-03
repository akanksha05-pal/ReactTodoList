import React from 'react'
import classes from './TodoItem.module.css';
const TodoItem = ({todo,onDelete}) => {
    return (
        <div className={classes.container}>
            <h1>{todo.title}</h1>
            <p>{todo.desc}</p>
            <button onClick={()=>{onDelete(todo.sno)}}>Delete</button>
        </div>
    )
}

export default TodoItem;
