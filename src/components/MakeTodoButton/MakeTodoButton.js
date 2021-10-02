import React from 'react';
import { GrAdd } from 'react-icons/gr';

const MakeTodoButton = () => {
    return (
        <div className="MakeTodoButton container-fluid">
            <div className="mt-3 text-center">
                <button type="button" class="btn btn-primary w-25 p-2"><GrAdd></GrAdd>Make A Todo</button>
            </div>
        </div>
    );
};

export default MakeTodoButton;