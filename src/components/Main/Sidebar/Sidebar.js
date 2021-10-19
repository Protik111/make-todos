import React, { useContext, useEffect, useState } from 'react';
import { FcTodoList, FcList } from 'react-icons/fc';
import { CgToday, CgCalendarNext } from 'react-icons/cg';
import { GrStatusInfo, GrAdd } from 'react-icons/gr';
import { MdDateRange, MdCancel } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsListUl } from 'react-icons/bs';

//date and time import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import moment from 'moment';

//components import
import Modal from '../Modal/Modal';
import AllTodos from '../AllTodos/AllTodos';
import NextSeven from '../NextSeven/NextSeven';
import Today from '../Today/Today';
import { TodoContext } from '../../../App';
import Completed from '../Completed/Completed';
import Uncompleted from '../Uncompleted/Uncompleted';

// let todoId = 0;

const Sidebar = () => {
    const [todos, setTodos, showModal, setShowModal] = useContext(TodoContext);

    // const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    console.log('dates', date);
    const [all, setAll] = useState('');
    const [err, setErr] = useState('');
    const [completed, setCompleted] = useState('');
    const [activeButton, setActiveButton] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (time && name) {
            // let todoId = 0;
            setTodos([...todos, {
                id: Math.random() * 1000,
                names: name,
                dates: moment(date).format('DD/MM/YYYY'),
                times: moment(time, "HH:mm:ss").format('hh:mm a'),
                day: moment(date).format('d'),
                checked: false
            }]);
            // getFromLocal();
            setErr('');
            setName('');
            setTime(null);
            setShowModal(false);
        } else {
            setErr('PLease Provide Name and Time');
        }
    }
    console.log('todos', todos);

    const handleOption = (e) => {
        console.log(e.target.value);
        if (e.target.value === 'alls') {
            setCompleted('alls');
        } if (e.target.value === 'completed') {
            setCompleted('completed');
        } if (e.target.value === 'uncompleted') {
            setCompleted('uncompleted');
        }
        // setTodos(todos.filter(todo => todo.checked === true));
    }

    const handleActiveButton = (e) => {
        if (e === 'today') {
            setActiveButton(e)
        } if (e === 'next7') {
            setActiveButton(e);
        } if (e === 'showAll') {
            setActiveButton(e);
        } if (e === 'status') {
            setActiveButton(e);
        }
    }


    return (
        <div className="Sidebar">
            <div className="sidebar-box">
                <div className="text-center">
                    <p className="todosOf"><FcTodoList></FcTodoList> Todos Of</p>
                    <button onClick={() => {
                        setShowModal(true);
                        setActiveButton(null);
                        setAll('');
                    }} type="button" class="btn add-btn p-2"><GrAdd className="addTodo"></GrAdd>Make A Todo</button>
                </div>
                <hr />
                <div className="todoBox-container">
                    <div className="todosOf__item offset-md-2">
                        <a href="" onClick={(e) => {
                            setAll('today');
                            setCompleted('');
                            e.preventDefault();
                            handleActiveButton('today');
                        }} className={`px-4 py-2 mt-2 todosOf__items todosOf__item--today ${activeButton === 'today' ? 'activeButtonStyle' : ''}`}><CgToday className="m-1"></CgToday>today</a>
                        <br />
                        <a href="" onClick={(e) => {
                            setAll('next7');
                            setCompleted('');
                            e.preventDefault();
                            handleActiveButton('next7');
                        }} className={`px-4 py-2 mt-2 todosOf__items todosOf__item--next ${activeButton === 'next7' ? 'activeButtonStyle' : ''}`}><CgCalendarNext className="m-1"></CgCalendarNext>next 7 days</a>
                        <br />
                        <a href="" onClick={(e) => {
                            setAll('all');
                            setCompleted('');
                            e.preventDefault();
                            handleActiveButton('showAll');
                        }} className={`px-4 py-2 mt-2 todosOf__items todosOf__item--all ${activeButton === 'showAll' ? 'activeButtonStyle' : ''}`}><BsListUl className="m-1"></BsListUl>show all
                        </a>
                        <br />
                        <a href="" onClick={(e) => {
                            setAll('status');
                            e.preventDefault();
                            handleActiveButton('status');
                        }} className={`px-4 py-2 mt-2 todosOf__items todosOf__item--status ${activeButton === 'status' ? 'activeButtonStyle' : ''}`}><GrStatusInfo className="m-1"></GrStatusInfo>status</a>
                    </div>
                    <div className="todoBox">
                        {all === 'today' && <Today setActiveButton={setActiveButton} todos={todos}></Today>}
                        {all === 'next7' && <NextSeven setActiveButton={setActiveButton} todos={todos}></NextSeven>}
                        {all === 'all' && <AllTodos setActiveButton={setActiveButton} todos={todos}></AllTodos>}
                        {all === 'status' &&
                            <div className="text-center TodosList p-4">
                                <select name="" id="done" onChange={handleOption} className="form-select" aria-label="Default select example">
                                    <option value="">Please choose an option</option>
                                    <option value="alls">all</option>
                                    <option value="completed">completed</option>
                                    <option value="uncompleted">uncompleted</option>
                                </select>
                            </div>
                        }
                        {
                            completed === 'alls' && <AllTodos setAll={setAll} todos={todos}></AllTodos>
                        }
                        {
                            completed === 'completed' && <Completed todos={todos}></Completed>
                        }
                        {
                            completed === 'uncompleted' && <Uncompleted todos={todos}></Uncompleted>
                        }
                    </div>

                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <div className="modalBox mt-4">
                        <div className="text-center">
                            <h3>Add A New Todo</h3>
                        </div>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <input className="todoName" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter Todo Name" />
                            </div>

                            <div className="datePicker">
                                <p className="m-4 mt-4"><span><MdDateRange className="pickDate"></MdDateRange></span> Pick a Date</p>
                                <div className="text-center mt-4 dateBox">
                                    <DatePicker className="date" selected={date} onChange={(date) => setDate(date)} />
                                </div>
                            </div>

                            <div className="timePicker">
                                <p className="m-4 mt-4"><span><AiOutlineFieldTime className="pickTime"></AiOutlineFieldTime></span> Pick a Time</p>
                                <div className="text-center mt-4">
                                    <TimePicker
                                        onChange={time => setTime(time)}
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
                                <input type="submit" value="Add A Todo" className="btn w-100 add-btn submit-btn p-2" />
                            </div>
                        </form>
                        <div className="text-center">
                            <p className="error" style={{ color: 'red' }}>{err}</p>
                        </div>
                        {/* <p>{time}</p> */}
                        <button href="#" onClick={() => setShowModal(false)}><MdCancel className="cancelIcon"></MdCancel></button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Sidebar;