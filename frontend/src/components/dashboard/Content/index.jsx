import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";
import { createContext, useState, useContext } from "react";
import { ProjectsContext } from "@/pages/_app";

import CardProject from "../Cards"
import AddProjectModal from "../Modal";

export const AddProjectContext = createContext();

export default function Content() {

    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);

    //Data updated every 5s
    const projectsItems = useContext(ProjectsContext);
    console.log('projectItems: ', projectsItems)
    
    const openModal = () => {
        setIsAddProjectModalOpen(true);
    }

    const onClose = () => {
        setIsAddProjectModalOpen(false);
    }

    //Convert date
    const usFormat = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return (
        <AddProjectContext.Provider value={{isAddProjectModalOpen, onClose}}>
            <div className="flex-1 overflow-hidden">
                {/* Remove this search bar later and substitute by the component SearchBar */}
                <div className="flex justify-between border-b p-4">
                    {/* Search bar */}
                    <div className="flex items-center bg-gray-100 rounded-full w-1/2 p-2">
                        <IoSearchOutline size={24}/>
                        <input 
                            type="text" 
                            placeholder="Search for projects, tasks..."
                            className="bg-transparent ml-2 w-full outline-none"
                        />
                    </div>      

                    {/* Side icons */}
                    <div className="flex gap-2">
                        <IoIosNotificationsOutline size={32}/>
                        <FaRegUserCircle size={32}/>
                    </div>
                </div>

                <main className="px-6 py-6">
                    <div className="flex justify-between ">
                        <h1 className="font-bold text-3xl">My Workspace</h1>
                        <button 
                            className="flex items-center gap-2 p-2 bg-blue-600 rounded text-white"
                            onClick={openModal}
                        >
                            <SlPlus size={24} />
                            New Project
                        </button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 mt-6 max-h-[calc(100vh-200px)] custom-scrollbar overflow-y-auto">
                        {projectsItems.map((project) => (
                            <div className="p-4 border rounded w-[32%]">
                                <h2 className="font-semibold text-blue-600">{project.status}</h2>
                                <h3 className="font-medium">{project.title}</h3>
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <span>Deadline:</span> <span>{usFormat.format(new Date(project.deadline))}</span>
                                </div>
                                <span className="text-sm text-gray-500">50%</span>
                            </div>
                        ))}
                    </div>        
                </main>
            </div>
            <AddProjectModal />
        </AddProjectContext.Provider>
    )
}