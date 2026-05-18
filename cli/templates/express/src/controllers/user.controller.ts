import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashedPassword });
        
        res.status(201).json({ message: "User created successfully", userId: user._id });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ message: "Error creating user" });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
        
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in user" });
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        // As we are using JWT, logout is usually handled client-side by destroying the token,
        // but we can clear a cookie if it was set, or just send a success message.
        res.status(200).json({ message: "User logged out successfully. Please clear your token on the client side." });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: "Error logging out user" });
    }
}
