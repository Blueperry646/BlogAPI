import { RequestHandler } from 'express';

export const signIn: RequestHandler = (req, res) => { 
    //lógica para autenticar o usuário
}

export const signUp: RequestHandler = (req, res) => {
    //lógica para registrar um novo usuário
}

export const validate: RequestHandler = (req, res) => {
    //lógica para validar o token de autenticação
}
