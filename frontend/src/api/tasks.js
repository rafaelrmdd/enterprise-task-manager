import axios from "axios";

export const tasksApi = axios.create({
    baseURL: "http://localhost:5119/api"
})