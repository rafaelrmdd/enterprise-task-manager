import { IoSearchOutline } from "react-icons/io5";
import { SlPlus } from "react-icons/sl";
import { createContext, useState, useContext } from "react";
import { ProjectsContext } from "@/pages/_app";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

import AddProjectModal from "../AddProjectModal";
import { projectsApi } from "@/api/projects";
import EditProjectModal from "../EditProjectModal";

export const ProjectModalsContext = createContext();

export default function Content() {

    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
    const [searchCharacters, setSearchCharacters] = useState('');
    const [itemToBeEdited, setItemToBeEdited] = useState('');

    //Data updated every 5s
    const projectsItems = useContext(ProjectsContext);
    const filteredProjectItems = projectsItems.filter((project) => 
        project.title.toLowerCase().includes(searchCharacters.toLowerCase())
    )
    
    const openAddProjectModal = () => {
        setIsAddProjectModalOpen(true);
    }

    const onCloseAddProjectModal = () => {
        setIsAddProjectModalOpen(false);
    }

    const openEditProjectModal = (project) => {
        setIsEditProjectModalOpen(true);
        setItemToBeEdited(project)
    }

    const onCloseEditProjectModal = () => {
        setIsEditProjectModalOpen(false);
    }

    const handleDelete = async (project) => {
        const response = await projectsApi.delete(`/projects/${project.id}`);
        console.log('delete response: ', response);
    }

    //Convert date
    const usFormat = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    return (
        <ProjectModalsContext.Provider 
            value=
            {{
                isAddProjectModalOpen, onCloseAddProjectModal,
                isEditProjectModalOpen, onCloseEditProjectModal, itemToBeEdited
            }}
        >
            <div className="flex-1 overflow-hidden">
                <div className="flex justify-between border-b p-4">
                    {/* Search bar */}
                    <div className="flex items-center bg-gray-100 rounded-full w-1/2 p-2">
                        <IoSearchOutline size={24}/>
                        <input 
                            type="text" 
                            placeholder="Search for projects by title..."
                            onChange={(e) => {
                                console.log(e.target.value)
                                setSearchCharacters(e.target.value)
                            }}
                            className="bg-transparent ml-2 w-full outline-none"
                        />
                    </div>      
                </div>
                <main className="px-6 py-6">
                    <div className="flex justify-between ">
                        <h1 className="font-bold text-3xl">My Workspace</h1>
                        <button 
                            className="flex items-center gap-2 p-2 bg-blue-600 rounded text-white"
                            onClick={openAddProjectModal}
                        >
                            <SlPlus size={24} />
                            New Project
                        </button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4 mt-6 max-h-[calc(100vh-200px)] custom-scrollbar overflow-y-auto">
                        {filteredProjectItems.map((project) => (
                            <div className="p-4 border rounded w-[32%]" key={project.id}>
                                <div className="flex justify-between">
                                    <h2 className="font-semibold text-blue-600">{project.status}</h2>
                                    <div className="flex gap-1">
                                        <FaRegEdit 
                                            className="hover:cursor-pointer"
                                            onClick={() => openEditProjectModal(project)}
                                        />
                                        <GoTrash 
                                            className="hover:cursor-pointer"
                                            onClick={() => handleDelete(project)}
                                        />
                                    </div>
                                </div>
                                
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
            <EditProjectModal />
        </ProjectModalsContext.Provider>
    )
}