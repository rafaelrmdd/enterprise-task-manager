import { CiFilter } from "react-icons/ci";
import { SlPlus } from "react-icons/sl";
import { createContext, useState } from "react";

import SearchBar from "../../SearchBar"
import AddTaskModal from "../Modal";

export const TaskContext = createContext();

export default function Content() {

    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    
    const openModal = () => {
        setIsAddTaskModalOpen(true);
    }

    const onClose = () => {
        setIsAddTaskModalOpen(false);
    }

    return (
        <TaskContext.Provider
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
                            <tr className="border-y">
                                {/* Content */}
                                <td className="p-4">Implementando nova feature</td>
                                <td className="p-4">WebApp</td>
                                <td className="p-4">Rafael R.</td>
                                <td className="p-4">15/01/2025</td>
                                <td className="p-4">Pendente</td>
                            </tr>
                            <tr className="border-y">
                                {/* Content */}
                                <td className="p-4">Implementando nova feature</td>
                                <td className="p-4">WebApp</td>
                                <td className="p-4">Rafael R.</td>
                                <td className="p-4">15/01/2025</td>
                                <td className="p-4">Pendente</td>
                            </tr>
                            <tr className="border-y">
                                {/* Content */}
                                <td className="p-4">Implementando nova feature</td>
                                <td className="p-4">WebApp</td>
                                <td className="p-4">Rafael R.</td>
                                <td className="p-4">15/01/2025</td>
                                <td className="p-4">Pendente</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
            <AddTaskModal />
        </TaskContext.Provider>
    )
}