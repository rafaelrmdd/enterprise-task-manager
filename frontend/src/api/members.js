import axios from "axios";

export const membersApi = axios.create({
    baseURL: "http://localhost:5119/api"
})

