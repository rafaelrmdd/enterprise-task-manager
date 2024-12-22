import "@/styles/globals.css";

import { tasksApi } from "../api/tasks"
import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export default function App({ Component, pageProps }) {

  const [tasksItems, setTasksItems] = useState([]);

  //Keep the data on components/tasks/Content/index.jsx updated
  useEffect(() => {
    const fetchTasks = async () => {
        const response = await tasksApi.get('/tasks');
        setTasksItems(response.data); 
    };

    fetchTasks();
    
    const interval = setInterval(fetchTasks, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TasksContext.Provider
      value={tasksItems}
    >
      <Component {...pageProps} />
    </TasksContext.Provider>
  )
}
