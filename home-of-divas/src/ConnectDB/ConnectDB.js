import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () =>{
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI);
        if(response){
            console.log("DB: connection successfully");
        }
    } catch (error) {
        console.log("ERROR:", error)
    }
}