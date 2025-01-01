import { TbFileExport } from "react-icons/tb";
import { useContext } from "react";
import { ProjectsContext, TasksContext } from "../../../pages/_app";

export function CardTasksProductivity() {
    const tasksItems = useContext(TasksContext);
    const taskItemsInProgress = tasksItems.filter(task => task.status === 0).length;
    const taskItemsFinished = tasksItems.filter(task => task.status === 1).length;
    const taskItemsInOverdue = tasksItems.filter(task => task.status === 2).length //Add enum 3 on the api later

    return (

        <div className="w-[31%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-blue-600">Task Productivity</p> 
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
                <span className="font-semibold text-red-500">{taskItemsInOverdue}</span>
            </div>
        </div>
    )
}

export function CardProjectsProductivity() {
    const projectItems = useContext(ProjectsContext);
    const projectItemsInProgress = projectItems.filter(project => project.status === 0).length;
    const projectItemsFinished = projectItems.filter(project => project.status === 1).length;
    const projectItemsInOverdue = projectItems.filter(project => project.status === 2).length

    return (
        <div className="w-[31%] border rounded p-4">
            <div className="flex justify-between mb-4">
                <p className="font-semibold text-green-600">Project Productivity</p> 
                <TbFileExport className="size-6"/>
            </div>
            <div className="flex justify-between mb-2">
                <p>Projects In Progress</p> 
                <span className="font-semibold text-orange-500">{projectItemsInProgress}</span>  
            </div>
            <div className="flex justify-between mb-2">
                <p>Projects Finished</p> 
                <span className="font-semibold text-green-500">{projectItemsFinished}</span>  
            </div>
            <div className="flex justify-between">
                <p>Projects in Overdue</p>
                <span className="font-semibold text-red-500">{projectItemsInOverdue}</span>
            </div>
        </div>
    )
}