
import React, { FormEvent, useState } from 'react';


interface PropsTodo {
    todo:string;
    setTodo:  React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void
}

const Input = ({todo, setTodo, handleAdd} : PropsTodo) => {
  

  
    return (
        <div>
            <form className='form-field' onSubmit={handleAdd} >
                <input className='' value={todo} onChange={(e)=> setTodo(e.target.value)} type='text' placeholder='Enter your task'/>
                <button type='submit'>Go</button>
            </form>
            
        </div>
    );
};

export default Input;