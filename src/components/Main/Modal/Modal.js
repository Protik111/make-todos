import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal = ({children, showModal, setShowModal}) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false);
        }
    }

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 300,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        showModal && 
        <div data-aos="zoom-in" className="Modal" ref={modalRef} onClick={closeModal}>
            <div className="modalContainer">
                {children}
            </div>
        </div>
    );
};

export default Modal;