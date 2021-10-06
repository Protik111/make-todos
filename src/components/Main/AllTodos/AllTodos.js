import React from 'react';
import Todo from '../Todo/Todo';

const AllTodos = ({ todos }) => {
    return (
        <div className="AllTodos TodosList p-4">
            <div className="text-center mb-4">
                <h3>Your Todos List :</h3>
            </div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default AllTodos;