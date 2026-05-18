import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";


dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!authHeader || !JWT_SECRET) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
}