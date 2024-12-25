import { TasksContext } from "../../../pages/_app";
import { useContext } from "react";

export default function CardProject() {

    //Data updated every 5s
    const tasksItems = useContext(TasksContext);
    const taskItemsInProgress = tasksItems.filter(task => task.status === 0).length;
    const taskItemsFinished = tasksItems.filter(task => task.status === 1).length;

    //implement data later
    return (
        <div className="p-4 border rounded w-[32%]">
            <h2 className="font-semibold text-blue-600">In Progress</h2>
            <h3 className="font-medium">System redesign</h3>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Deadline:</span> <span>00/00/0000</span>
            </div>
            <span className="text-sm text-gray-500">50%</span>
        </div>
    )
}
