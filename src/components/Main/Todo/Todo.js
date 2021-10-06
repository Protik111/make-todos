import React, { useContext, useEffect, useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime, AiFillDelete } from 'react-icons/ai';
import { FcEditImage, FcCheckmark } from 'react-icons/fc';
import { TodoContext } from '../../../App';


let dayName = '';

const Todo = ({ todo, dayNameShow, random }) => {
    const [todos, setTodos] = useContext(TodoContext);
    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(tds => tds.id !== id));
    }

    const handleDayName = (day) => {
        if (day === '0') {
            return dayName = 'Sunday';
        } if (day === '1') {
            return dayName = 'Monday';
        } if (day === '2') {
            return dayName = 'Tuesday';
        } if (day === '3') {
            return dayName = 'Wednesday';
        } if (day === '4') {
            return dayName = 'Thursday';
        } if (day === '5') {
            return dayName = 'Friday';
        } if (day === '6') {
            return dayName = 'Saturday';
        }
    }

    useEffect(() => {
        handleDayName(todo.day)
    }, [todo.day])

    return (
        <div className="Todo mt-4">
            {dayNameShow && random === 0 &&
                <div className="text-center">
                    <h4 className="dayName">({dayName})</h4>
                </div>
            }
            <div className="todoItem">
                <div>
                    <p className={`todoNames ${check ? 'checked' : ''}`}>{todo.names}</p>
                </div>
                <div className="todoIconBox">
                    <button data-toggle="tooltip" data-placement="top" title="Edit" className="iconBtn"><FcEditImage className="todoIcons"></FcEditImage></button>

                    <button onClick={handleCheck} data-toggle="tooltip" data-placement="top" title="Done" className="iconBtn doneBtn">{!check && <FcCheckmark className="todoIcons"></FcCheckmark>}</button>

                    <button onClick={() => handleDelete(todo.id)} data-toggle="tooltip" data-placement="top" title="Delete" className="iconBtn"><AiFillDelete className="todoIcons"></AiFillDelete></button>
                </div>
            </div>
            <div className="tododetail">
                <div className="todoTimes">
                    <p><MdDateRange></MdDateRange>{todo.dates}</p>
                </div>
                <div className="todoTimes">
                    <p><AiOutlineFieldTime></AiOutlineFieldTime>{todo.times}</p>
                </div>
            </div>
        </div>
    );
};

export default Todo;