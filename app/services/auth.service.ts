import apiAxios from "../api/api"
import { saveToStorage } from "../hooks/hooks"
import cookie from 'js-cookie'

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

    async register(login: string, password: string) {
        const res = await apiAxios.post("/auth/register", {
            login,
            password,
        }, {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`
            }
        })
        return res
    },

    async getProfile() {
        const res = await apiAxios.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`
            }
        })
        return res
    },
}

