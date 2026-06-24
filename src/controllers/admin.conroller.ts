import { RequestHandler, Response } from 'express';
import z from 'zod';
import { getUserById } from '../services/user.service';
import { title } from 'node:process';  
import { ExtendedRequest } from '../types/extended-request';
import { handleCover } from '../services/post.service';

export const addPost: RequestHandler = async(req: ExtendedRequest, res: Response) => {
    if (!req.user) return

    const schema = z.object({
        title: z.string(),
        tags: z.string(),
        body: z.string(),
    });

    const data = schema.safeParse(req.body)
    if (!data.success) {
        return res.status(400).json({ errors: data.error.flatten().fieldErrors });
    }

    if (!req.file) {
        return res.status(400).json({ message: "image is required" });
    }

    const coverName = await handleCover(req.file);
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
