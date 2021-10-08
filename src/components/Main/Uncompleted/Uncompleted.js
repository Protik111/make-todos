import React, { useEffect, useState } from 'react';
import Todo from '../Todo/Todo';

const Completed = ({todos}) => {
    const [filterredTodos, setFilterredTodos] = useState([]);
    useEffect(() => {
        setFilterredTodos(todos.filter(todo => todo.checked === false))
    }, [todos]);
    console.log('filter', filterredTodos);
    return (
        <div className="Completed TodosList p-4">
            <div className="text-center">
                <h3>Uncompleted List : <bold className="alltodosLength">({filterredTodos.length})</bold></h3>
            </div>
            {
                filterredTodos.map(todo => <Todo checked={todo.checked} key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Completed;