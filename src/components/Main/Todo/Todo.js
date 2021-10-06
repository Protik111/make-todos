import React, { useContext, useEffect, useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime, AiFillDelete } from 'react-icons/ai';
import { FcEditImage, FcCheckmark, FcCalendar } from 'react-icons/fc';
import { TodoContext } from '../../../App';


let dayName = '';

const Todo = ({ todo, setTodo, dayNameShow, random, todayDate, dayNames, dayButtonShow, setDayButtonShow, dayNameArr }) => {

    const [todos, setTodos] = useContext(TodoContext);
    const [check, setCheck] = useState(false);
    const [todoLength, setTodoLength] = useState([]);
    const [hidden, setHidden] = useState(false);

    const handleLength = () => {
        setTodoLength(todos.filter(tds => tds.dates === todayDate));
    }

    useEffect(() => {
        handleLength();
    }, [todos]);

    const handleCheck = () => {
        setCheck(!check);
    }
    const handleDelete = (id) => {
        setTodos(todos.filter(tds => tds.id !== id));
    }

    const handleSingleDay = (e) => {

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

    //show days todos
    const handleDayArr = (e) => {
        // console.log('clicked', e);
        if (e === 'Wednesday') {
            setTodo(todo.filter(td => td.day === '3'));
            setHidden(!hidden);
            console.log(todo);
            console.log('todoDetails', todo.names);
        } if(e === 'Tuesday'){
            setTodo(todo.filter(td => td.day === '2'))
            setHidden(!hidden);
        }else {
            console.log('Other');
        }
    }

    useEffect(() => {
        handleDayName(todo.day)
    }, [todo.day, todos])

    return (
        <div className="Todo mt-4">
            {dayNameShow && random === 0 &&
                <div className="text-center">
                    <h4 className="dayName"><FcCalendar style={{ marginBottom: '2px', marginRight: '5px' }}></FcCalendar>({dayName}) - <span>({todoLength.length})</span></h4>
                </div>
            }

            {dayButtonShow && <div>
                <button onClick={() => handleDayArr(dayNameArr)} className="dayNameBtn">{dayNameArr}</button>
            </div>}
            {!dayButtonShow && <div className="todoItem">
                <div>
                    <p className={`todoNames ${check ? 'checked' : ''}`}>{todo.names}</p>
                </div>
                <div className="todoIconBox">
                    <button data-toggle="tooltip" data-placement="top" title="Edit" className="iconBtn"><FcEditImage className="todoIcons"></FcEditImage></button>

                    <button onClick={handleCheck} data-toggle="tooltip" data-placement="top" title="Done" className="iconBtn doneBtn">{!check && <FcCheckmark className="todoIcons"></FcCheckmark>}</button>

                    <button onClick={() => handleDelete(todo.id)} data-toggle="tooltip" data-placement="top" title="Delete" className="iconBtn"><AiFillDelete className="todoIcons"></AiFillDelete></button>
                </div>
            </div>}
            {!dayButtonShow && <div className="tododetail">
                <div className="todoTimes">
                    <p><MdDateRange></MdDateRange>{todo.dates}</p>
                </div>
                <div className="todoTimes">
                    <p><AiOutlineFieldTime></AiOutlineFieldTime>{todo.times}</p>
                </div>
            </div>}


            {/* display hidden */}
            <div className={`hidden ${hidden ? 'hiddenUndone': 'hidden'}`}>
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
        </div>
    );
};

export default Todo;