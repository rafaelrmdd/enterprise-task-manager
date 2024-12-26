import "@/styles/globals.css";

import { tasksApi } from "../api/tasks"
import { projectsApi } from "../api/projects";
import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();
export const ProjectsContext = createContext();

export default function App({ Component, pageProps }) {

  const [tasksItems, setTasksItems] = useState([]);
  const [projectsItems, setProjectsItems] = useState([]);

  //Keep the data on components/tasks/Content/index.jsx and components/workspace/content/index.jsx updated
  useEffect(() => {
    const fetchTasks = async () => {
        const response = await tasksApi.get('/tasks');
        setTasksItems(response.data); 
    };

    const fetchProjects = async () => {
        const response = await projectsApi.get('/projects');
        setProjectsItems(response.data); 
    }

    fetchTasks();
    fetchProjects();
    
    const interval = setInterval(fetchTasks, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ProjectsContext.Provider value={projectsItems}>
      <TasksContext.Provider value={tasksItems}>
        <Component {...pageProps} />
      </TasksContext.Provider>
    </ProjectsContext.Provider>

  )
}
