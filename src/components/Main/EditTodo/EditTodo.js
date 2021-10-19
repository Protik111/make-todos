import React, { useContext, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { MdDateRange, MdCancel } from 'react-icons/md';
import DatePicker from "react-datepicker";
import { AiOutlineFieldTime } from 'react-icons/ai';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import { TodoContext } from '../../../App';
import moment from 'moment';
import EditModal from './EditModal';
import { getDay } from 'date-fns';
// value={name} onChange={e => setName(e.target.value)}
// selected={date} onChange={(date) => setDate(date)}


// onChange={time => setTime(time)}
// selected={time}

const EditTodo = ({ todo, setEditShowModal, selectedId, setSelectedId }) => {
    const [todos, setTodos, showModal, setShowModal] = useContext(TodoContext);
    const [date, setDate] = useState(todo.dates);
    const [name, setName] = useState(todo.names);
    const [time, setTime] = useState(moment(todo.times, "HH:mm:ss").format('hh:mm a'));
    // const [dayNumber, setDayNumber] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        todo.names = name;
    }

    const handleDate = (date) => {
        console.log(date);
        setDate(moment(date).format('DD/MM/YYYY'));
        // setDate(date);
        todo.dates = moment(date).format('DD/MM/YYYY');
        
        // setDayNumber(date.getDay());
        // console.log('dayNumber', dayNumber);
    }
    
    const handleTime = (time) => {
        // setTime(moment(time, "HH:mm:ss").format('hh:mm a'));
        setTime(time);
        todo.times = (moment(time, "HH:mm:ss").format('hh:mm a'));
    }

    console.log('todos from edit', todo);
    console.log('all todos from edit', todos);
    console.log('dates from edit', date, name, time, todo.names);

    // const getDay = () =>{
    //     return moment(date.getUTCDay()).format('d');
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos], {
                id: todo.id,
                names: todo.names,
                dates: moment(todo.dates).format('DD/MM/YYYY'),
                times: moment(todo.times, "HH:mm:ss").format('hh:mm a'),
                day: todo.day,
                checked: todo.checked
        })
        setEditShowModal(false);
        setSelectedId(null);
    }
    return (
        <div>
            <div className="modalBox mt-4">
                <div className="text-center">
                    <h3>Edit The Todo</h3>
                </div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <input value={name} onChange={handleName} className="todoName" type="text" name="name" placeholder="Enter Todo Name" />
                    </div>

                    {/* <p>{todo.id}</p> */}
                    <div className="datePicker">
                        <p className="m-4 mt-4"><span><MdDateRange className="pickDate"></MdDateRange></span> Pick a Date</p>
                        <div className="text-center mt-4 dateBox">
                            <DatePicker className="date" value={date} onChange={(date) => handleDate(date)} />
                        </div>
                    </div>

                    <div className="timePicker">
                        <p className="m-4 mt-4"><span><AiOutlineFieldTime className="pickTime"></AiOutlineFieldTime></span> Pick a Time</p>
                        <div className="text-center mt-4">
                            <TimePicker
                                onChange={time => handleTime(time)}
                                selected={time}
                                amPmAriaLabel="AM/PM"
                                closeClock={true}
                                disableClock={true}
                                format="h:m: a"
                                hourPlaceholder="hh"
                                minutePlaceholder="mm"
                                clearIcon=""
                                className="date"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Make Edit" className="btn w-100 add-btn submit-btn p-2" />
                    </div>
                </form>
                <div className="text-center">
                    {/* <p className="error" style={{ color: 'red' }}>{err}</p> */}
                </div>
                {/* <p>{time}</p> */}
                <button href="#" onClick={() => setEditShowModal(false)}><MdCancel className="cancelIcon"></MdCancel></button>
            </div>
        </div>
    );
};

export default EditTodo;