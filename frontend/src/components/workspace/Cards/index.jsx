import { TasksContext } from "../../../pages/_app";
import { useContext } from "react";

export function CardTaskStatus() {

    //Data updated every 5s
    const tasksItems = useContext(TasksContext);
    const taskItemsInProgress = tasksItems.filter(task => task.status === 0).length;
    const taskItemsFinished = tasksItems.filter(task => task.status === 1).length;

    //implement data later

    return (
        <div className="border rounded p-4">
            <h2>Task Status</h2>
            <div className="flex justify-between gap-4 mt-4 ">
                <div className="flex flex-col items-center">
                    <span className="text-3xl ">{taskItemsInProgress}</span> <p className="text-gray-400">In Progress</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{taskItemsFinished}</span> <p className="text-gray-400">Completed</p>
                </div>
            </div>
        </div>
    )
}

export function CardProductivity() {

    //Data updated every 5s
    const tasksItems = useContext(TasksContext);

    return (
        <div className="border rounded p-4">
            <h2>Productivity</h2>
            <div className="flex gap-4 mt-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl">12</span> <p className="text-gray-400">Tasks Completed</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">8</span> <p className="text-gray-400">Hours Worked</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">24</span> <p className="text-gray-400">Average Task Duration</p>
                </div>
            </div>
        </div>
    )
}