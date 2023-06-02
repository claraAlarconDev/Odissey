import apiClient from './apiClient'

export default {
    async login(elemento) {
        try {
            const response = await apiClient.post("/login", elemento)
            return response.data
        } catch (error) {
            throw "Error no se pudo iniciar sesion"
        }
    },
    async logout(elemento) {
        try {
            await apiClient.post("/logout", elemento)
        } catch (error) {
            throw "Error no se pudo cerrar sesion"
        }
    },
    async registry(elemento) {
        try {
            await apiClient.post("/registry", elemento)
        } catch (error) {
            throw "Error no se ha podido registrar como usuario"
        }
    }
}