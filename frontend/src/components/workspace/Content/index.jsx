import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { SlPlus } from "react-icons/sl";
import CardProject from "../Cards"

export default function Content() {

    return (
        <div className="flex-1">
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
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">My Workspace</h1>
                    <button className="flex items-center gap-2 p-2 bg-blue-600 rounded text-white ">
                        <SlPlus size={24} />
                        New Task
                    </button>
                </div>
                <div className="flex flex-row flex-wrap gap-4 mt-6">
                    <CardProject />
                </div>        
            </main>
            
            {/* Graph here later */}
        </div>
    )
}