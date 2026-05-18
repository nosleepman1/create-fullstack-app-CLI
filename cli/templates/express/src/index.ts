import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin : [
        process.env.FRONTEND_URL as string,
        "http://localhost:5173", 
        "http://localhost:4200"
    ],
    credentials : true  
}));

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
