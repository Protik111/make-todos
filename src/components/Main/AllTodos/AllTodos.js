import React from 'react';

const AllTodos = ({ todos }) => {
    // const {names} = props.todos;
    // console.log('alltodos', names);
    console.log('alll', todos);
    return (
        <div className="AllTodos TodosList p-4">
            <div className="text-center">
                <h3>Your Todos List :</h3>
            </div>
            {
                todos.map(todo => <li>{todo.names}</li>)
            }
        </div>
    );
};

export default AllTodos;