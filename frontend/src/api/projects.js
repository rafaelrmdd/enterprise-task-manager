import axios from "axios";

export const projectsApi = axios.create({
    baseURL: "http://localhost:5119/api"
})

