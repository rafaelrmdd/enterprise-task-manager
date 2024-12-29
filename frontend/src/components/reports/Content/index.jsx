import { TbFileExport } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { CardTasksProductivity, CardProjectsProductivity } from "../Cards";
import { GoGraph } from "react-icons/go";

import { PieGraphTasks, PieGraphProjects } from "../Graphs/"
import SearchBar from "../../SearchBar"

export default function Content() {

    return (
        <div className="flex-1">
            <SearchBar />
            <main className="p-6">
                <div>
                    <h1 className="font-bold text-3xl">Reports</h1>    
                </div>

                <section className="flex gap-4 mt-7">
                    <CardTasksProductivity />
                    <CardProjectsProductivity />
                </section>

                <section className="mt-7">
                    <div className="border rounded p-4">
                        <div className="flex justify-between">
                            <h2 className="font-semibold text-orange-600">Month Performance</h2>
                            <GoGraph className="size-6"/>
                        </div>
                        
                        <div className="flex items-center">
                            <PieGraphTasks />
                            <PieGraphProjects />
                        </div>     
                    </div>
                </section>
            </main>
            
        </div>
    )
}