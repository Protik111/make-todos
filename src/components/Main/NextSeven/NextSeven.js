import React, { useContext, useState } from 'react';
import { TodoContext } from '../../../App';
import Todo from '../Todo/Todo';

const NextSeven = () => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];
    const [todos, setTodos] = useContext(TodoContext);
    const [todo, setTodo] = useState(todos);
    const [dayButtonShow, setDayButtonShow] = useState(true);
      
    return (
        <div className="NextSeven TodosList p-4">
            <div className="text-center">
                <h3>Next Seven Days List :</h3>
                {
                    dayNames.map(dayNameArr => <Todo dayButtonShow={dayButtonShow} setDayButtonShow={setDayButtonShow} todo={todo} setTodo={setTodo} dayNameArr={dayNameArr}></Todo>)
                }
            </div>
        </div>
    );
};

export default NextSeven;