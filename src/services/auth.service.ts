import { User } from "@prisma/client";
import { createJWT, verifyJWT } from "../lib/jwt";
import { TokenPayload } from "../types/token-payload";
import { getUserById } from "../services/user.service";

export const createToken = (user: User) => {
    return createJWT({ id: user.id })
}

export const verifyRquest = async (req: any) => {
    const { autorization } = req.headers;
    if (autorization) {
        const token = autorization.split('Bearer ')[1];
        if (token) {
            const payLoad = verifyJWT(token)
            if (payLoad) {
                const user_id = (payLoad as TokenPayload).id;
                console.log('token payload:', payLoad);
                console.log('user_id:', user_id); // Debugging line
                const user = await getUserById(Number(user_id));
                if (user) return user;
            }
        }
    }
    return false;
}