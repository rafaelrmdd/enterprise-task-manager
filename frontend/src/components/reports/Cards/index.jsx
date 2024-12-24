import { TbFileExport } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { AiOutlineProject } from "react-icons/ai";
import { useContext } from "react";
import { TasksContext } from "@/pages/_app";

export function CardProductivity() {
    const tasksItems = useContext(TasksContext);
    const taskItemsInProgress = tasksItems.filter(task => task.status === 0).length;
    const taskItemsFinished = tasksItems.filter(task => task.status === 1).length;
    const taskItemsInOverdue = tasksItems.filter(task => task.status === 2).length //Add enum 3 on the api later

    return (

        <div className="w-[31%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-blue-600">Team Productivity</p> 
                <TbFileExport className="size-6"/>
            </div>
            <div className="flex justify-between mb-2">
                <p>Total of Tasks In Progress</p> 
                <span className="font-semibold text-orange-500">{taskItemsInProgress}</span>  
            </div>
            <div className="flex justify-between mb-2">
                <p>Total of Tasks Finished</p> 
                <span className="font-semibold text-green-500">{taskItemsFinished}</span>  
            </div>
            <div className="flex justify-between">
                <p>Total of Tasks in Overdue</p>
                <span className="font-semibold text-red-500">8</span>
            </div>
        </div>
    )
}

// export function CardProjectTime() {
//     return (
//         <div className="w-[31%] border rounded p-4">
//             <div className="flex justify-between mb-4">
//                 <p className="font-semibold text-green-600">Project Time</p> 
//                 <GoClock className="size-6"/>
//             </div>
//             <div className="flex justify-between mb-2">
//                 <p>Total de Tarefas Concluídas</p> 
//                 <span className="font-semibold">128</span>  
//             </div>
//             <div className="flex justify-between mb-2">
//                 <p>Média de Conclusão</p> 
//                 <span className="font-semibold">85%</span>  
//             </div>
//             <div className="flex justify-between">
//                 <p>Taréfas em Atraso</p>
//                 {/* Green if its positive, Red if its negative */}
//                 <span className="font-semibold">15</span>
//             </div>
//         </div>
//     )
// }

// export function CardProjectStatus() {
//     return (
//         <div className="w-[33.3%] border rounded p-4">
//             <div className="flex justify-between mb-4">
//                 <p className="font-semibold text-purple-600">Project Status</p> 
//                 <AiOutlineProject className="size-6"/>
//             </div>
//             <div className="flex justify-between mb-2">
//                 <p>In Progress</p> 
//                 <span className="font-semibold">128</span>  
//             </div>
//             <div className="flex justify-between mb-2">
//                 <p>Finished</p> 
//                 <span className="font-semibold">85%</span>  
//             </div>
//             <div className="flex justify-between">
//                 <p>Overdue</p>
//                 {/* Green if its positive, Red if its negative */}
//                 <span className="font-semibold">15</span>
//             </div>
//         </div>
//     )
// }