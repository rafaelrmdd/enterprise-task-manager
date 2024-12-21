import { tasksApi } from "@/api/tasks";
import { useState, useEffect } from "react";

import Sidebar from "../../components/SideBar";
import Content from "../../components/tasks/Content";

export default function Tasks() {
    const [tasksItems, setTasksItems] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            
            const response = await tasksApi.get('/tasks');
            setTasksItems(response.data);
        }

        fetchTasks();
        
        const interval = setInterval(fetchTasks, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <Content tasks={tasksItems} />
        </div>
    )
}