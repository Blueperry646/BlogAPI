import { User } from '@prisma/client';
import { Request } from 'express';
import { file } from 'multer';

type UserWithoutPassword = Omit<User, 'password'>;

export type ExtendedRequest = Request & {
    user?: UserWithoutPassword;
    file?: file
};