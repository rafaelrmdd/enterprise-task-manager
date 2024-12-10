import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

//Wherever you use this SearchBar you need to put it inside a div with flex-1 to stretch it
export default function SearchBar() {
    return (
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
    )
}