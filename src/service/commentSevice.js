import apiClient from './apiClient'

export default {
    async addComment(idPost, elemento) {
        try {
            await apiClient.post(`/post/${idPost}/comment`, elemento)
        } catch (error) {
            throw "Error no se ha podido publicar el comentario"
        }
    },
    async deleteCommentById(idPost, idComment) {
        try {
            await apiClient.delete(`/post/${idPost}/comment/` + idComment)
        } catch (error) {
            throw "Error no se pudo eliminar el comentario"
        }
    },
    async editComment(idPost, idComment, elemento) {
        try {
            await apiClient.put(`/post/${idPost}/${idComment}`, elemento)
        } catch (error) {
            throw "Error no se pudo modificar el comentario"
        }
    }
}