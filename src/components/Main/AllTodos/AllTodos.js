import React, { useContext, useEffect } from 'react';
import { TodoContext } from '../../../App';
import Todo from '../Todo/Todo';

const AllTodos = () => {
    const [todos, setTodos] = useContext(TodoContext);

    return (
        <div className="AllTodos TodosList p-4">
            <div className="text-center mb-4">
                <h3>Your Todos List : <bold className="alltodosLength">({todos.length})</bold></h3>
            </div>
            {
                todos.map(todo => <Todo checked={todo.checked} key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default AllTodos;