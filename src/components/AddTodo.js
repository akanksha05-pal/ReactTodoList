import React, { useRef } from "react";

const AddTodo = (props) => {
  const titleRef = useRef();
  const descRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const todo={  
        sno:titleRef.current.value,
        title:titleRef.current.value,
        desc:descRef.current.value
    }
    if(titleRef.current.value && descRef.current.value){
        props.onAdd(todo);
    }
    titleRef.current.value="";
    descRef.current.value="";
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Todo Title</label>
          <input type="text" ref={titleRef} name="todo" id="title" />
        </div>
        <div>
          <label htmlFor="desc">Todo Description</label>
          <input type="text" ref={descRef} name="desc" id="desc" />
        </div>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
