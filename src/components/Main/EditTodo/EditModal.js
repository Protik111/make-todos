import React, { useContext, useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TodoContext } from '../../../App';
import EditTodo from './EditTodo';

const EditModal = ({ children, edit, editShowModal, setEditShowModal, selectedId, setSelectedId }) => {
    const modalRef = useRef();
    const [todos, setTodos, showModal, setShowModal] = useContext(TodoContext);
    const [editTodos, setEditTodos] = useState([]);

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setEditShowModal(false);
            setSelectedId(null);
        }
    }

    useEffect(() => {
        setEditTodos(todos.filter(todo => todo.id === selectedId));
    }, [todos])

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 300,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        // editShowModal && edit &&
        // <div data-aos="zoom-in" className="Modal" ref={modalRef} onClick={closeModal}>
        //     <div className="modalContainer">
        //         {children}
        //     </div>
        // </div>
        <div data-aos="zoom-in" className="Modal" ref={modalRef} onClick={closeModal}>
            <div className="modalContainer">
                {
                    editTodos.map(todo => <EditTodo todo={todo} selectedId={selectedId} setSelectedId={setSelectedId} setEditShowModal={setEditShowModal}></EditTodo>)
                }
            </div>
        </div>
    );
};

export default EditModal;