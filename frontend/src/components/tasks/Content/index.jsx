import { CiFilter } from "react-icons/ci";
import { SlPlus } from "react-icons/sl";
import { createContext, useState, useEffect, useContext } from "react";

import SearchBar from "../../SearchBar"
import AddTaskModal from "../Modal";
import { TasksContext } from "@/pages/_app";

export const AddTaskContext = createContext();

export default function Content() {

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

    //Data updated every 5s
    const tasksItems = useContext(TasksContext);
    
    const openModal = () => {
        setIsAddTaskModalOpen(true);
    }

    const onClose = () => {
        setIsAddTaskModalOpen(false);
    }

    //Convert date
    const usFormat = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return (
        <AddTaskContext.Provider value={{isAddTaskModalOpen, onClose}}>
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <SearchBar />
                <main className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">My Workspace</h1>    
                        
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 bg-gray-300 p-2 rounded-md text-black">
                                <CiFilter />
                                Filtros
                            </button>
                            <button 
                                className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white"
                                onClick={openModal}
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
                                {tasksItems.map((task) => (
                                    <tr 
                                        className="border-b hover:bg-gray-50"
                                        key={task.id}
                                    >
                                        <td className="p-4">{task.title}</td>
                                        <td className="p-4">{task.project}</td>
                                        <td className="p-4">{task.responsible}</td>
                                        <td className="p-4">{usFormat.format(new Date(task.deadline))}</td>
                                        <td className="p-4">
                                            {task.status === 0 ? "In Progress" 
                                            : task.status === 1 ? "Finished" 
                                            : task.status === 2 ? "Overdue"
                                            : "Not Informed"}
                                        </td>
                                    </tr>   
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <AddTaskModal/>
        </AddTaskContext.Provider>
    )
}