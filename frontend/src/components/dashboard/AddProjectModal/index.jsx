import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { projectsApi } from '../../../api/projects';
import { AddProjectContext, ProjectModalsContext } from '../Content';

import Modal from 'react-modal';

export default function AddProjectModal() {
    Modal.setAppElement('#__next');

    const { isAddProjectModalOpen, onCloseAddProjectModal } = useContext(ProjectModalsContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const response = await projectsApi.post("/projects", {
            title: data.projectTitle,
            status: parseInt(
                data.projectStatus === "In Progress" ? 0 
                : data.projectStatus === "Finished" ? 1 
                : data.projectStatus === "Overdue" ? 2 
                : 4),
            deadline: new Date(data.projectDeadline).toISOString(),
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <Modal
            isOpen={isAddProjectModalOpen}
            onRequestClose={onCloseAddProjectModal}
            contentLabel="Create New Project"
            className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="projectTitle" className="block font-medium mb-1">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="projectTitle"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("projectTitle")}
                        />
                    </div>
                    <div>
                        <label htmlFor="projectDeadline" className="block font-medium mb-1">
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="projectDeadline"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("projectDeadline")}
                        />
                    </div>
                    <div>
                        <label htmlFor="projectStatus" className="block font-medium mb-1">
                            Status
                        </label>
                        <select 
                            className="border rounded-md px-3 py-2 w-full"
                            id="projectStatus"
                            {...register("projectStatus")}
                        >
                            <option>In Progress</option>
                            <option>Finished</option>
                            <option>Overdue</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md mr-2"
                        onClick={onCloseAddProjectModal}
                    >
                    Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                    Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}