import React, { useState } from 'react';
import { FcTodoList, FcList } from 'react-icons/fc';
import { CgToday, CgCalendarNext } from 'react-icons/cg';
import { GrStatusInfo, GrAdd } from 'react-icons/gr';
import { MdDateRange, MdCancel } from 'react-icons/md';
import Modal from '../Modal/Modal';

//date and time import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import AllTodos from '../AllTodos/AllTodos';
import NextSeven from '../NextSeven/NextSeven';
import Today from '../Today/Today';
import Status from '../Status/Status';
// import { TimePicker } from 'antd';

// import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);
    const [all, setAll] = useState('');
    // const [next7, setNext7] = useState(false);
    const [err, setErr] = useState('');

    // console.log(name, date, time);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (time && name) {
            setTodos([...todos, {
                names: name,
                dates: date,
                times: time
            }])
            setErr('');
            setName('');
            setTime(null);
            setShowModal(false)
        } else {
            setErr('PLease Provide Name and Time');
        }
    }
    console.log('todos', todos);

    return (
        <div className="Sidebar">
            <div className="sidebar-box">
                <div className="text-center">
                    <p className="todosOf"><FcTodoList></FcTodoList> Todos Of</p>
                    {/* <MakeTodoButton></MakeTodoButton> */}
                    <button onClick={() => setShowModal(true)} type="button" class="btn btn-primary add-btn p-2"><GrAdd className="addTodo"></GrAdd>Make A Todo</button>
                </div>
                <hr />
                <div className="todosOf__item offset-md-3">
                    <a href="" onClick={(e) => {
                        setAll('today');
                        e.preventDefault();
                    }} className="todosOf__items todosOf__item--today"><CgToday className="m-1"></CgToday>today</a>
                    <br />
                    <a href="" onClick={(e) => {
                        setAll('next7');
                        e.preventDefault();
                    }} className="todosOf__items todosOf__item--next"><CgCalendarNext className="m-1"></CgCalendarNext>next 7 days</a>
                    <br />
                    <a href="" onClick={(e) => {
                        setAll('all');
                        e.preventDefault();
                    }} className="todosOf__items todosOf__item--all"><FcList className="m-1"></FcList>show all
                    </a>
                    <br />
                    <a href="" onClick={(e) => {
                        setAll('status');
                        e.preventDefault();
                    }} className="todosOf__items todosOf__item--status"><GrStatusInfo className="m-1"></GrStatusInfo>status</a>
                </div>
                <div className="todoBox">
                    {all === 'all' && <AllTodos todos={todos}></AllTodos>}
                    {all === 'next7' && <NextSeven></NextSeven>}
                    {all === 'today' && <Today></Today>}
                    {all === 'status' && <Status></Status>}
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
                                <p className="m-4 mt-4"><span><MdDateRange className="pickTime"></MdDateRange></span> Pick a Date</p>
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
                                <input type="submit" value="Add A Todo" class="btn btn-primary add-btn p-2" />
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            <p style={{color: 'red'}}>{err}</p>
                        </div>
                        {/* <p>{time}</p> */}
                        <a href="#" onClick={() => setShowModal(false)}><MdCancel className="cancelIcon"></MdCancel></a>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Sidebar;