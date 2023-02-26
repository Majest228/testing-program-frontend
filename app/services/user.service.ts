import apiAxios from "../api/api"
import cookie from 'js-cookie'

export const UserService = {
    async getProfile() {
        const res = await apiAxios.get("/user/profile", {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })
        return res
    },
    async getAll() {
        const res = await apiAxios.get('/user/', {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })
        return res
    },
    async deleteUser(id: number) {
        return await apiAxios.delete(`user/${id}`, {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })
    }
}