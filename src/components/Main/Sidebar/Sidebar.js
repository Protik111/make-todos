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
// import { TimePicker } from 'antd';

// import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null);

    console.log(name, date, time);

    const handleSubmit = (e) => {
        console.log('clicked', e);
    }
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
                    <p className="todosOf__item--today"><CgToday className="m-1"></CgToday>today</p>
                    <p className="todosOf__item--next"><CgCalendarNext className="m-1"></CgCalendarNext>next 7 days</p>
                    <p className="todosOf__item--all"><FcList className="m-1"></FcList>show all</p>
                    <p className="todosOf__item--status"><GrStatusInfo className="m-1"></GrStatusInfo>status</p>
                    {/* <p>{time}</p> */}
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <div className="modalBox mt-4">
                        <div className="text-center">
                            <h3>Add A New Todo</h3>
                        </div>
                        <form action="" className="mt-4" onSubmit={handleSubmit}>
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
                                        // required={true}
                                        clearIcon=""
                                        className="date"
                                    />
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                {/* <button type="button" className="btn btn-primary add-btn p-2"><GrAdd className="addTodo"></GrAdd>Add To Your List</button> */}
                                <input type="button" className="btn btn-primary add-btn p-2" value="Add to" />
                            </div>
                        </form>
                        {/* <p>{time}</p> */}
                        <a onClick={() => setShowModal(false)}><MdCancel className="cancelIcon"></MdCancel></a>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default Sidebar;