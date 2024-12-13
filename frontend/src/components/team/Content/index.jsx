import { SlPlus } from "react-icons/sl"

import Card from "../Card";
import SearchBar from "../../SearchBar"


export default function Content() {
    return (
        <div className="flex-1">
            <SearchBar />
            <main className="px-6 py-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">My Workspace</h1>    

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white">
                            <SlPlus size={24} />
                            New Member
                        </button>
                    </div>
                </div>

                <div className="flex flex-row justify-between flex-wrap">
                    <Card />
                    <Card />    
                    <Card />
                    <Card />
                </div>

            </main>
        </div>
    )
}