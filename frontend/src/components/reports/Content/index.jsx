import { TbFileExport } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { CardProductivity, CardProjectStatus, CardProjectTime } from "../Cards";
import { GoGraph } from "react-icons/go";
import { useContext } from "react";
import { TasksContext } from "@/pages/_app";

import PieGraph from "../Graphs/"
import SearchBar from "../../SearchBar"

export default function Content() {

    return (
        <div className="flex-1">
            <SearchBar />
            <main className="p-6">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">Reports</h1>    

                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 bg-gray-300 p-2 rounded-md text-black">
                            <CiCalendar className="size-6"/>
                            Time
                        </button>
                        <button className="flex items-center gap-2 bg-blue-600 p-2 rounded-md text-white">
                            <TbFileExport className="size-6"/>
                            Export
                        </button>
                    </div>
                </div>

                <section className="flex gap-4 mt-7">
                    <CardProductivity />
                </section>

                <section className="mt-7">
                    <div className="border rounded p-4">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-orange-600">Month Performance</h2>
                            <GoGraph className="size-6"/>
                        </div>
                        
                        <div className="flex items-center">
                            <PieGraph />
                        </div>     
                    </div>
                </section>
            </main>
            
        </div>
    )
}