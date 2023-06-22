import apiClient from './apiClient'

export default {
    async login(elemento) {
        try {
            const response = await apiClient.post("/user/login", elemento)
            return response.data
        } catch (error) {
            throw "Error: " + error.response.data.message
        }
    },
    async logout(elemento) {
        try {
            await apiClient.post("/user/logout", elemento)
        } catch (error) {
            throw "Error no se pudo cerrar sesion"
        }
    },
    async registry(elemento) {
        try {
            await apiClient.post("/user/", elemento)
        } catch (error) {
            throw error.response.data.result
        }
    }
}