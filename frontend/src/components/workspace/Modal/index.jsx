import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { TaskContext } from '../Content';

export default function AddTaskModal() {

    const { isAddTaskModalOpen, closeModal } = useContext(TaskContext);

    return (
        <Modal
            isOpen={isAddTaskModalOpen}
            onRequestClose={closeModal}
            
            className=""
            overlayClassName=""
        >
            <button onClick={closeModal}>Close</button>
        </Modal>
    )
}