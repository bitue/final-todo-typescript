import React, { useState } from 'react';
import './App.css'
import Input from './components/Input/Input';
import TodoList from './components/TodoList/TodoList';

import { todoModel } from './model/todomodel';

function App() {

  const [todo, setTodo]=useState<string>('');

  const [todos, setTodos]=useState<todoModel[]>([])

  const handleAdd =(e: React.FormEvent)=> {
    console.log(1)
    e.preventDefault();

    // write the code to set the all todos

    if(todo) {
      setTodos([...todos, {id:Date.now(),isDone:false, todo }])
      setTodo('')
    }
  
  }

  console.log(todos)
  return (
    <div data-testid='app' className="App">
      <div>
         <h1 className='head'>Taskify</h1>
         <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} ></Input>
      </div>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
     
    
    </div>
  );
}

export default App;
