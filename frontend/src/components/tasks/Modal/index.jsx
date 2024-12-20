import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { TaskContext } from '../Content';


export default function AddTaskModal() {
    
    Modal.setAppElement('#__next');

    const { isAddTaskModalOpen, onClose } = useContext(TaskContext);

    return (
        <Modal
        isOpen={isAddTaskModalOpen}
        onRequestClose={onClose}
        contentLabel="Create New Task"
        className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
            <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
            <div className="space-y-4">
                <div>
                <label htmlFor="taskTitle" className="block font-medium mb-1">
                    Task Title
                </label>
                <input
                    type="text"
                    id="taskTitle"
                    className="border rounded-md px-3 py-2 w-full"
                />
                </div>
                <div>
                <label htmlFor="project" className="block font-medium mb-1">
                    Project
                </label>
                <input
                    type="text"
                    id="project"
                    className="border rounded-md px-3 py-2 w-full"
                />
                </div>
                <div>
                <label htmlFor="responsible" className="block font-medium mb-1">
                    Responsible
                </label>
                <input
                    type="text"
                    id="responsible"
                    className="border rounded-md px-3 py-2 w-full"
                />
                </div>
                <div>
                <label htmlFor="deadline" className="block font-medium mb-1">
                    Deadline
                </label>
                <input
                    type="date"
                    id="deadline"
                    className="border rounded-md px-3 py-2 w-full"
                />
                </div>
            </div>
            <div className="mt-6 flex justify-end">
                <button
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md mr-2"
                    onClick={onClose}
                >
                Cancel
                </button>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                >
                Save
                </button>
            </div>
        </Modal>
    )
}