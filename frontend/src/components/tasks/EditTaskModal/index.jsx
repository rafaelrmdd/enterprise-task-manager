import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { TaskModalsContext } from '../Content';
import { MembersContext, ProjectsContext } from "@/pages/_app";
import { supabase } from "../../../api/api";

import Modal from 'react-modal';

export default function EditTaskModal() {
    Modal.setAppElement('#__next');

    const { isEditTaskModalOpen, onCloseEditTaskModal, itemToBeEdited } = useContext(TaskModalsContext);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    
    const onSubmit = async (dataForm) => {
        const { data, error } = await supabase
            .from('Tasks')
            .update
            ({
                title: dataForm.taskTitle,
                project: dataForm.taskProject,
                responsible: dataForm.taskResponsible,
                deadline: new Date(dataForm.taskDeadline),
                status: parseInt(
                    dataForm.taskStatus === "In Progress" ? 0 
                    : dataForm.taskStatus === "Finished" ? 1 
                    : dataForm.taskStatus === "Overdue" ? 2 
                    : 4
                )
            })
            .eq('id', `${itemToBeEdited.id}`)
            .select()

        setValue('taskTitle', '')
        setValue('taskProject', '')
        setValue('taskResponsible', '')
        setValue('taskDeadline', '')
        setValue('taskStatus', '')
    }

    const projectsItems = useContext(ProjectsContext);
    const membersItems = useContext(MembersContext);

    return (
        <Modal
            isOpen={isEditTaskModalOpen}
            onRequestClose={onCloseEditTaskModal}
            contentLabel="Edit Task"
            className="bg-white p-6 rounded-lg shadow-lg w-[500px]"
            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="taskTitle" className="block font-medium mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="taskTitle"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("taskTitle")}
                        />
                    </div>
                    <div>
                        <label htmlFor="taskProject" className="block font-medium mb-1">
                            Project
                        </label>
                        <select 
                            className="border rounded-md px-3 py-2 w-full"
                            id="taskProject"
                            {...register("taskProject")}
                        >
                            {projectsItems.map((project) => (
                                <option>
                                    {project.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taskResponsible" className="block font-medium mb-1">
                            Responsible
                        </label>
                        <select 
                            className="border rounded-md px-3 py-2 w-full"
                            id="taskResponsible"
                            {...register("taskResponsible")}
                        >
                            {membersItems.map((member) => (
                                <option>
                                    {member.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taskDeadline" className="block font-medium mb-1">
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="taskDeadline"
                            className="border rounded-md px-3 py-2 w-full"
                            {...register("taskDeadline")}
                        />
                    </div>
                    <div>
                        <label htmlFor="status" className="block font-medium mb-1">
                            Status
                        </label>
                        <select 
                            className="border rounded-md px-3 py-2 w-full"
                            id="taskStatus"
                            {...register("taskStatus")}
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
                        onClick={onCloseEditTaskModal}
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