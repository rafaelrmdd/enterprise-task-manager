import { RxDashboard } from "react-icons/rx";
import { BsListTask } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";


export default function Sidebar() {
    return (
        <aside className="p-4 w-64 border-r bg-white">
            <h1 className="text-blue-700 font-bold text-2xl">TaskMaster</h1>

            <nav className="mt-8 flex flex-col gap-y-4 px-3">
                <div className="flex items-center gap-2">
                    <RxDashboard className="size-7 text-blue-600"/>
                    <p className="inline">Dashboard</p> 
                </div>
                <div className="flex items-center gap-2">
                    <BsListTask className="size-7 text-green-600"/>
                    <p className="inline">Tasks</p> 
                </div>
                <div className="flex items-center gap-2">
                    <AiOutlineTeam className="size-7 text-purple-600"/>
                    <p className="inline">Team</p> 
                </div>
                <div className="flex items-center gap-2">
                    <TbReportAnalytics className="size-7 text-orange-600"/>
                    <p className="inline">Reports</p> 
                </div>
            </nav>
        </aside>
    )
}