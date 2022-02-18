import React from 'react';
import { todoModel } from '../../model/todomodel';
import SingleTodo from '../SingleTodo/SingleTodo';
interface Props {
    todos: todoModel[];
    setTodos:React.Dispatch<React.SetStateAction<todoModel[]>>
}
const TodoList = ({todos, setTodos} : Props) => {
    return (
        <div>
            {
                todos.map(todo => <SingleTodo todo={todo} todos={todos} setTodos={setTodos} ></SingleTodo>)
            }
            
        </div>
    );
};

export default TodoList;