import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";



export default function Content() {
    return (
        <div className="flex-1">
            
            <div className="flex justify-between border-b p-4">
                {/* Search bar */}
                <div className="flex items-center bg-gray-100 rounded-full w-1/2 p-2">
                    <IoSearchOutline size={24}/>
                    <input 
                        type="text" 
                        placeholder="Search for projects, tasks..."
                        className="bg-transparent ml-2"
                    />
                </div>      

                {/* Side icons */}
                <div className="flex gap-2">
                    <IoIosNotificationsOutline size={32}/>
                    <FaRegUserCircle size={32}/>
                </div>
            </div>

            <main className="px-6 py-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">My Workspace</h1>

                    <button className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white">
                        <SlPlus size={24}/>
                        New Project
                    </button>
                </div>
                
                <div className="flex flex-row gap-10">
                    <div className="border p-4 w-[31%] mt-6">
                        <div className="flex justify-between">
                            <h2 className="inline text-blue-600 font-semibold">In Progress</h2>
                            <span className="border rounded-full px-2">4</span>
                        </div>
                        
                        <div className="bg-gray-100 p-3 rounded mt-4">
                            <p>System design</p>
                            <div>
                                <p className="inline">Prazo: 15 dias</p>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 w-[31%] mt-6">
                        <div className="flex justify-between">
                            <h2 className="inline text-blue-600 font-semibold">In Progress</h2>
                            <span className="border rounded-full px-2">4</span>
                        </div>
                        
                        <div className="bg-gray-100 p-3 rounded mt-4">
                            <p>System design</p>
                            <div>
                                <p className="inline">Prazo: 15 dias</p>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 w-[31%] mt-6">
                        <div className="flex justify-between">
                            <h2 className="inline text-blue-600 font-semibold">In Progress</h2>
                            <span className="border rounded-full px-2">4</span>
                        </div>
                        
                        <div className="bg-gray-100 p-3 rounded mt-4">
                            <p>System design</p>
                            <div>
                                <p className="inline">Prazo: 15 dias</p>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </main>
            
        </div>
    )
}