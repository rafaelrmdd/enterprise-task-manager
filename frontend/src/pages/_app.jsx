import { createContext, useState, useEffect } from "react";
import { supabase } from "../api/api";

import "@/styles/globals.css";

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
      try{
        let { data, error } = await supabase
          .from('Members')
          .select('*')

        setMembersItems(data); 
      }catch(error) {
        console.log(error)
        setMembersItems([]);
      }
    }

    const fetchProjects = async () => {
      try{
        let { data, error } = await supabase
          .from('Projects')
          .select('*')

        setProjectsItems(data); 
      }catch(error) {
        console.log(error);
        setProjectsItems([]);
      }
    }

    const fetchTasks = async () => {
      try{
        let { data, error } = await supabase
          .from('Tasks')
          .select('*')

        setTasksItems(data);
      }catch(error){
        console.log(error)
        setTasksItems([]);
      }
    };

    fetchMembers();
    fetchProjects();
    fetchTasks();
    
    const interval = setInterval(() => {
      fetchMembers();
      fetchProjects();
      fetchTasks();
    }, 2000);

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
