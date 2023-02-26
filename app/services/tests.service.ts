import apiAxios from "../api/api"
import cookie from 'js-cookie'

export const TestsService = {
    async getAll() {
        return await apiAxios.get("test")

    },

    async getById(id: number) {
        return await apiAxios.get(`test/testByid/${id}`)
    },

    async getByTestId(id: number) {
        return await apiAxios.get(`question/${id}`)
    },

    async getWithoutIsRight(id: number) {
        return await apiAxios.get(`question/without/${id}`)
    },

    async getTitle(id: number) {
        return await apiAxios.get(`question/title/${id}`)
    },
    async createTest(data: any) {
        return await apiAxios.post("test", data, {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })
    },

    async createQuestions(id: number) {
        return await apiAxios.post(`question/${id}`, { id }, {
            headers: {
                Authorization: `Bearer ${cookie.get("accessToken")}`,
            },
        })

    }

}
