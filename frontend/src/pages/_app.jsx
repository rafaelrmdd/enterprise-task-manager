import "@/styles/globals.css";

import { tasksApi } from "../api/tasks"
import { projectsApi } from "../api/projects";
import { createContext, useState, useEffect } from "react";
import { membersApi } from "@/api/members";

export const TasksContext = createContext();
export const ProjectsContext = createContext();
export const MembersContext = createContext();

export default function App({ Component, pageProps }) {

  const [tasksItems, setTasksItems] = useState([]);
  const [projectsItems, setProjectsItems] = useState([]);
  const [membersItems, setMembersItems] = useState([]);

  //Keep all the data updated every 5s
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await membersApi.get('/members');
      setMembersItems(response.data); 
    }

    const fetchProjects = async () => {
      const response = await projectsApi.get('/projects');
      setProjectsItems(response.data); 
    }

    const fetchTasks = async () => {
      const response = await tasksApi.get('/tasks');
      setTasksItems(response.data); 
    };



    fetchMembers();
    fetchProjects();
    fetchTasks();
    
    const interval = setInterval(() => {
      fetchMembers();
      fetchProjects();
      fetchTasks();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MembersContext.Provider value={membersItems}>
      <ProjectsContext.Provider value={projectsItems}>
        <TasksContext.Provider value={tasksItems}>
            <Component {...pageProps} />
        </TasksContext.Provider>
      </ProjectsContext.Provider>
    </MembersContext.Provider>

  )
}
