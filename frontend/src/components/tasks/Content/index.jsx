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
        <AddTaskContext.Provider
            value={{isAddTaskModalOpen, onClose}}
        >
            <div className="flex-1">
                <SearchBar />
                <main className="p-6">
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
                                New Project
                            </button>
                        </div>
                    </div>
                    
                    <table className="w-full text-left mt-6">
                        <thead>
                            <tr className="border-y">
                                {/* Head */}
                                <th className="font-semibold p-4 ">Task Title</th>
                                <th className="font-semibold p-4">Project</th>
                                <th className="font-semibold p-4">Responsible</th>
                                {/* Prazo */}
                                <th className="font-semibold p-4">Deadline</th>
                                <th className="font-semibold p-4">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tasksItems.map((task) => (
                            <tr 
                                className="border-y"
                                key={task.id}
                            >
                                {/* Content */}
                                <td className="p-4">{task.title}</td>
                                <td className="p-4">{task.project}</td>
                                <td className="p-4">{task.responsible}</td>
                                <td className="p-4">{usFormat.format(new Date(task.deadline))}</td>
                                <td className="p-4">{task.status === 0 ? "In Progress" : "Finished"}</td>
                            </tr>
                            
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
            <AddTaskModal/>
        </AddTaskContext.Provider>
    )
}