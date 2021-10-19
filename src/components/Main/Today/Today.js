import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../App';
import Todo from '../Todo/Todo';

const Today = ({setActiveButton}) => {
    let random = 0;
    const [todos, setTodos] = useContext(TodoContext);
    const [todayTodo, setTodayTodo] = useState([]);
    
    const date = new Date();
    const todayDate = moment(date).format('DD/MM/YYYY');

    useEffect(()=> {
        setTodayTodo(todos.filter(tds => tds.dates === todayDate))
    }, [todos]);

    return (
        <div className="Today TodosList p-4">
            <div className="text-center">
                <h3>Today's List : </h3>
            </div>
            {
                todayTodo.map(todo => <Todo setActiveButton={setActiveButton} checked={todo.checked} key={todo.id} todayDate={todayDate} random={random++} dayNameShow={true} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Today;