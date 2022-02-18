import React from 'react';
import { todoModel } from '../../model/todomodel';
import {AiFillEdit, AiFillDelete, } from 'react-icons/ai'
import {MdOutlineDoneAll} from 'react-icons/md'



interface Props {
    todo:todoModel;
    todos:todoModel[];
    setTodos:React.Dispatch<React.SetStateAction<todoModel[]>>
}



const SingleTodo = ({todo, todos, setTodos} : Props) => {
    const changeDone =(id:number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone:!todo.isDone} : todo))
   
    }
    const deleteTodo=(id : number)=> {
        setTodos(todos.filter(todo => todo.id !== id))

    }

    const editTheChange =(id : number, done:boolean)=> {
        if(!done){
            const task = window.prompt('enter the new task')
            if(task){
                setTodos(todos.map(todo => todo.id === id ? {...todo, todo:task} : todo))

            }
            

        }
        return
     

    }
    
    return (
        <div className='todoSingle'>
            {
                todo.isDone ? <p><s>{todo.todo}</s> </p>  : <p>{todo.todo}</p>
            }
            <div>
                <span onClick={()=>editTheChange(todo.id, todo.isDone)}> <AiFillEdit/></span>
        
                <span onClick={()=> deleteTodo(todo.id)}>  <AiFillDelete/></span>
                <span  onClick={()=> changeDone(todo.id)}> <MdOutlineDoneAll/></span>
            </div>

            
        </div>
    );
};

export default SingleTodo;