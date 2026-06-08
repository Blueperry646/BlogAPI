import { User } from "@prisma/client";
import { createJWT} from "../lib/jwt";

export const createToken = (user: User) => {
    return createJWT({ id: user.id })
}