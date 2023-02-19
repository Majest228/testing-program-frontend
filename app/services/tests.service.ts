import apiAxios from "../api/api"

export const TestsService = {
    async getAll() {
        return apiAxios.get("test")

    },

    async getById(id: number) {
        return apiAxios.get(`test/${id}`)
    }
}
