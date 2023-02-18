import apiAxios from "../api/api"
import { saveToStorage } from "../hooks/hooks"

export const AuthService = {
    async login(login: string, password: string) {
        const res = await apiAxios.post("/auth/login", {
            login,
            password,
        })
        if (res.data.accessToken) {
            saveToStorage(res.data)
        }
        return res
    },
}

