import { CiFilter } from "react-icons/ci";
import { SlPlus } from "react-icons/sl";
import { createContext, useState, useContext } from "react";
import { TasksContext } from "../../../pages/_app"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { tasksApi } from "../../../api/tasks";

import AddTaskModal from "../AddTaskModal";
import EditTaskModal from "../EditTaskModal";

export const TaskModalsContext = createContext();

export default function Content() {

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [searchCharacters, setSearchCharacters] = useState('');
    const [itemToBeEdited, setItemToBeEdited] = useState('');

    //Data updated every 5s
    const tasksItems = useContext(TasksContext);
    const filteredTasksItems = tasksItems.filter((task) => 
        task.title.toLowerCase().includes(searchCharacters.toLowerCase())
    )
    
    const openAddTaskModal = () => {
        setIsAddTaskModalOpen(true);
    }

    const onCloseAddTaskModal = () => {
        setIsAddTaskModalOpen(false);
    }

    const openEditTaskModal = (task) => {
        setIsEditTaskModalOpen(true);
        setItemToBeEdited(task)
    }

    const onCloseEditTaskModal = () => {
        setIsEditTaskModalOpen(false);
    }

    const handleDelete = async (task) => {
        const response = await tasksApi.delete(`/tasks/${task.id}`);
        console.log('delete response:' , response)
    }

    //Convert date
    const usFormat = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return (
        <TaskModalsContext.Provider
            value=
            {{
                isAddTaskModalOpen, onCloseAddTaskModal,
                isEditTaskModalOpen, onCloseEditTaskModal, itemToBeEdited
            }}
        >
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <div className="flex justify-between border-b p-4">
                    {/* Search bar */}
                    <div className="flex items-center bg-gray-100 rounded-full w-1/2 p-2">
                        <IoSearchOutline size={24}/>
                        <input 
                            type="text" 
                            placeholder="Search for tasks by title..."
                            onChange={(e) => {
                                setSearchCharacters(e.target.value)
                            }}
                            className="bg-transparent ml-2 w-full outline-none"
                        />
                    </div>      
                </div>                
                <main className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">My Tasks</h1>    
                        
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 bg-gray-300 p-2 rounded-md text-black">
                                <CiFilter />
                                Filtros
                            </button>
                            <button 
                                className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white"
                                onClick={openAddTaskModal}
                            >
                                <SlPlus size={24} />
                                New Task
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex-1 overflow-y-auto max-h-[calc(100vh-200px)] border rounded-lg custom-scrollbar">
                        <table className="w-full text-left">
                            <thead className="sticky top-0 bg-white shadow-sm">
                                <tr className="border-b">
                                    <th className="font-semibold p-4">Task Title</th>
                                    <th className="font-semibold p-4">Project</th>
                                    <th className="font-semibold p-4">Responsible</th>
                                    <th className="font-semibold p-4">Deadline</th>
                                    <th className="font-semibold p-4">Status</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                {filteredTasksItems.length >= 1 ? filteredTasksItems.map((task) => (
                                    <tr 
                                        className="border-b hover:bg-gray-50"
                                        key={task.id}
                                    >
                                        <td className="p-4">{task.title}</td>
                                        <td className="p-4">{task.project}</td>
                                        <td className="p-4">{task.responsible}</td>
                                        <td className="p-4">{usFormat.format(new Date(task.deadline))}</td>
                                        <td className="p-4 text-blue-600">
                                            {task.status === 0 ? "In Progress" 
                                            : task.status === 1 ? "Finished" 
                                            : task.status === 2 ? "Overdue"
                                            : "Not Informed"}
                                        </td>
                                        <td className="flex gap-1 p-4 h-[57px] items-center">
                                            <FaRegEdit 
                                                className="hover:cursor-pointer"
                                                onClick={() => openEditTaskModal(task)}
                                            />
                                            <GoTrash 
                                                className="hover:cursor-pointer"
                                                onClick={() => handleDelete(task)}
                                            />
                                        </td>
                                    </tr>   
                                )) : <tr><td className="p-4 text-gray-400">You dont have any task</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <AddTaskModal/>
            <EditTaskModal />
        </TaskModalsContext.Provider>
    )
}