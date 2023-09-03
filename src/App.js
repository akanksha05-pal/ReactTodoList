import {useState,useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/TodoList';
import AddTodo from './components/AddTodo'



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete=(todoId)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.sno!==todoId);
    })
  };

  const addHandler = (todo)=>{
    setTodos((prevTodos)=>{
      return prevTodos.concat(todo);
    });
  }

  return (
    <div>
    <Header title="Learning React"/>
    <AddTodo onAdd={addHandler}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </div>
  );
}

export default App;
