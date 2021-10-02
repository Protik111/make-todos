import React from 'react';
import { FcTodoList, FcList } from 'react-icons/fc';
import { CgToday, CgCalendarNext } from 'react-icons/cg';
import { GrStatusInfo } from 'react-icons/gr';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="sidebar-box">
                <div className="text-center">
                    <p className="todosOf"><FcTodoList></FcTodoList> Todos Of</p>
                </div>
                <hr />
                <div className="todosOf__item offset-md-3">
                    <p className="todosOf__item--today"><CgToday className="m-1"></CgToday>today</p>
                    <p className="todosOf__item--next"><CgCalendarNext className="m-1"></CgCalendarNext>next 7 days</p>
                    <p className="todosOf__item--all"><FcList className="m-1"></FcList>show all</p>
                    <p className="todosOf__item--status"><GrStatusInfo className="m-1"></GrStatusInfo>status</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;