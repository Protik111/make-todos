import React from 'react';
import MakeTodoButton from '../MakeTodoButton/MakeTodoButton';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    return (
        <div className="Main">
            <Sidebar></Sidebar>
            <MakeTodoButton></MakeTodoButton>
        </div>
    );
};

export default Main;