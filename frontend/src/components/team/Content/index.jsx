import { SlPlus } from "react-icons/sl"
import { MembersContext } from "@/pages/_app";
import { createContext, useState, useContext} from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

import Card from "../Card";
import SearchBar from "../../SearchBar"
import AddMemberModal from "../Modal";

export const AddMemberContext = createContext();

export default function Content() {

    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);

    //Data updated every 5s
    const membersItems = useContext(MembersContext);
    
    const openModal = () => {
        setIsAddMemberModalOpen(true);
    }

    const onClose = () => {
        setIsAddMemberModalOpen(false);
    }

    return (
        <AddMemberContext.Provider value={{isAddMemberModalOpen, onClose}}>
            <div className="flex-1 overflow-hidden">
                <SearchBar />
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
                        {membersItems.map((member) => (
                            <div className="border rounded flex flex-row gap-4 p-4 w-[32%]">
                                <div className="flex flex-row gap-4 w-full ">
                                    <div className="flex items-center">
                                        <AiOutlineTeam className="size-10"/>
                                    </div>
                    
                                    <div className="w-full">
                                        <div>
                                            <p className="font-semibold text-lg">{member.name}</p>
                                        </div>
                                        
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">{member.role}</p>
                                            <HiOutlineDotsVertical className="size-6 text-gray-500"/>
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
        </AddMemberContext.Provider>
        
    )
}