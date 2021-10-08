import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Todo from '../Todo/Todo'

function NextSeven({ todos }) {
    const [weekTodos, setWeekTodos] = useState([]);

    useEffect(() => {
        const days = ['0', '1', '2', '3', '4', '5', '6'];

        const sortedTodosByDay = days.map(day => {
            return {
                todos: todos.filter(todo => todo.day === day),
                number: day
            }
            //return like sortedTodosByDay = [{[], '0'}, {[], '0'}]
        });

        const today = parseInt(moment().format('d'));

        const arrangeDays = sortedTodosByDay.slice(today).concat(sortedTodosByDay.slice(0, today));

        setWeekTodos(arrangeDays);
    }, [todos])

    return (
        <div className='NextSeven TodosList p-4'>
            {
                weekTodos.map(day =>
                    <div key={day.number}>
                        <div className='day'>
                            <h5 className='name'>
                                {moment(day.number, 'd').format('dddd')}
                                {day.number === moment().format('d') && ' (Today)'}
                            </h5>
                            <h5> - </h5>
                            <div className='total-todos'>
                                ({day.todos.length})
                            </div>
                        </div>
                        <div className='todos'>
                            {
                                day.todos.map(todo =>
                                    <Todo checked={todo.checked} key={todo.id} todo={todo} />
                                )
                            }
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default NextSeven;