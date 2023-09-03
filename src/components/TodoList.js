import React from "react";
import Todo from "./TodoItem";
import classes from './TodoList.module.css'

const TodoList = ({ todos,onDelete }) => {
  let content;
  if(todos.length===0){
    content='No todos in the list';
  }else{
    content = todos.map((todo,index) => (
      <Todo key={index} todo={todo} onDelete={onDelete} />
    ))
  }
  return (
    <div className={classes.container}>
      <h3>Todo List</h3>
      {content}
    </div>
  );
};

export default TodoList;
