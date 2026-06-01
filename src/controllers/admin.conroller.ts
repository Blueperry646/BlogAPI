import { RequestHandler } from 'express';

export const addPost: RequestHandler = (req, res) => {
    //lógica para adicionar um novo post
}

export const editPost: RequestHandler = (req, res) => {
    //lógica para editar um post existente
}

export const deletePost: RequestHandler = (req, res) => {
    //lógica para deletar um post existente
}

export const getAllPosts: RequestHandler = (req, res) => {
    //lógica para obter todos os posts
}

export const getPost: RequestHandler = (req, res) => {
    //lógica para obter um post específico
}
