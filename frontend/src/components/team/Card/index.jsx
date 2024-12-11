import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function Card() {
    return (
        <div className="border flex flex-row gap-4 p-4 w-[31%] mt-6">
            <div className="flex flex-row gap-4 w-full">
                <div className="flex items-center">
                    <AiOutlineTeam className="size-10"/>
                </div>

                <div className="w-full">
                    <div>
                        <p className="font-semibold text-lg">João Silva</p>
                    </div>
                    
                    <div className="flex justify-between">
                        <p className="text-gray-500">Desenvolvedor Sênior</p>
                        <HiOutlineDotsVertical className="size-6 text-gray-500"/>
                    </div>
                    
                    <div className="flex gap-2">
                        <MdOutlineEmail className="size-6 text-gray-500"/>
                        <IoCallOutline className="size-6 text-gray-500"/>
                    </div>
                </div>  
            </div>
        </div>
        
    )
}