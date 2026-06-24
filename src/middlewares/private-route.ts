import { NextFunction, Request, Response } from "express";
import { verifyRquest } from "../services/auth.service";
import { ExtendedRequest } from "../types/extended-request";

export const privateRoute = async(
    req: ExtendedRequest,
    res: Response,
    next: NextFunction
) => { 
    const user = await verifyRquest(req);
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
}