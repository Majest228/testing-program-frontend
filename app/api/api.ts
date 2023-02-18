import axios from "axios"
export const URL = "http://localhost:8080/api"

const apiAxios = axios.create({
    baseURL: URL,
})

export default apiAxios
