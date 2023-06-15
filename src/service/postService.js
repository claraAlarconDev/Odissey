import apiClient from './apiClient'

export default {
    async createPost(elemento) {
        try {
            await apiClient.post("/post", elemento)
        } catch (error) {
            throw "Error no se ha podido publicar el post"
        }
    },
    async deletePostById(idPost) {
        try {
            await apiClient.delete("/post/" + idPost)
        } catch (error) {
            throw "Error no se pudo eliminar el post"
        }
    },
    async editPost(idPost, elemento) {
        try {
            await apiClient.put(`/post/${idPost}`, elemento)
        } catch (error) {
            throw "Error no se pudo modificar el post"
        }
    },
    async getPostById(idPost) {
        try {
            console.log(idPost);
            const response = await apiClient.get(`/post/${idPost}`)
            return response.data.result
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async listAllPosts() {
        try {
            const response = await apiClient.get("/post")
            return response.data.result
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async listAllPostsByUserId(userId) {
        try {
            const response = await apiClient.get(`/post/users/${userId}`)
            return response.data.result
        } catch (error) {
            throw "Error de conexion"
        }
    }
}