import { SlPlus } from "react-icons/sl"
import { MembersContext } from "../../../pages/_app";
import { createContext, useState, useContext} from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { membersApi } from "@/api/members";
import { IoSearchOutline } from "react-icons/io5";

import EditMemberModal from "../EditMemberModal";
import AddMemberModal from "../AddMemberModal";

export const TeamModalsContext = createContext();

export default function Content() {

    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
    const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);
    const [searchCharacters, setSearchCharacters] = useState('');
    const [itemToBeEdited, setItemToBeEdited] = useState('');

    //Data updated every 5s
    const membersItems = useContext(MembersContext);
    const filteredMembersItems = membersItems.filter((member) => 
        member.name.toLowerCase().includes(searchCharacters.toLowerCase())
    )

    const openModal = () => {
        setIsAddMemberModalOpen(true);
    }

    const onCloseAddMemberModal = () => {
        setIsAddMemberModalOpen(false);
    }

    const openEditMemberModal = (member) => {
        setIsEditMemberModalOpen(true);
        setItemToBeEdited(member)
    }

    const onCloseEditMemberModal = () => {
        setIsEditMemberModalOpen(false);
    }

    const handleDelete = async (member) => {
        const response = await membersApi.delete(`/members/${member.id}`);
        console.log('delete response: ', response);
    }

    return (
        <TeamModalsContext.Provider 
            value=
            {{
                isAddMemberModalOpen, onCloseAddMemberModal,
                isEditMemberModalOpen, onCloseEditMemberModal, itemToBeEdited

            }}
        >
            <div className="flex-1 overflow-hidden">
            <div className="flex justify-between border-b p-4">
                    {/* Search bar */}
                    <div className="flex items-center bg-gray-100 rounded-full w-1/2 p-2">
                        <IoSearchOutline size={24}/>
                        <input 
                            type="text" 
                            placeholder="Search for members by name..."
                            onChange={(e) => {
                                console.log(e.target.value)
                                setSearchCharacters(e.target.value)
                            }}
                            className="bg-transparent ml-2 w-full outline-none"
                        />
                    </div>      
                </div> 
                <main className="px-6 py-6">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">My Workspace</h1>    

                        <div className="flex gap-2">
                            <button 
                                className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white"
                                onClick={openModal}
                            >
                                <SlPlus size={24} />
                                New Member
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 flex-wrap mt-6 max-h-[calc(100vh-200px)] custom-scrollbar overflow-y-auto">
                        {filteredMembersItems.map((member) => (
                            <div className="border rounded flex flex-row gap-4 p-4 w-[32%]">
                                <div className="flex flex-row gap-4 w-full ">
                                    <div className="flex items-center">
                                        <AiOutlineTeam className="size-10"/>
                                    </div>
                    
                                    <div className="w-full">
                                        <div className="flex justify-between">
                                            <p className="font-semibold text-lg">{member.name}</p>
                                            <div className="flex gap-1 items-center">
                                                <FaRegEdit
                                                    className="hover:cursor-pointer"
                                                    onClick={() => openEditMemberModal(member)}
                                                />
                                                <GoTrash
                                                    className="hover:cursor-pointer"
                                                    onClick={() => handleDelete(member)}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">{member.role}</p>
                                            
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <MdOutlineEmail className="size-6 text-gray-500"/>
                                            <IoCallOutline className="size-6 text-gray-500"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <AddMemberModal />
            <EditMemberModal />
        </TeamModalsContext.Provider>
        
    )
}