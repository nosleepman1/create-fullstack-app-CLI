// User Validation filliables : name , email , password 
import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const userValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
]

export const validate = (req: Request, res: Response, next: NextFunction) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}   