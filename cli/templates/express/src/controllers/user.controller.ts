import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
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
        res.status(500).json({ message: "Error logging in user" });
    }
}

export const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error logging out user" });
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findByIdAndUpdate(req.user.id, { name, email, password }, { new: true });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user" });
    }
}

export const deleteProfile = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user" });
    }
}


