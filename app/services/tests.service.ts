import apiAxios from "../api/api"

export const TestsService = {
    async getAll() {
        return await apiAxios.get("test")

    },

    async getById(id: number) {
        return await apiAxios.get(`test/${id}`)
    },

    async getByTestId(id: number) {
        return await apiAxios.get(`question/${id}`)
    }

}
