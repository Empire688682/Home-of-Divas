import { connectDB } from "@/ConnectDB/ConnectDB";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
connectDB();

const loginUser = async (req) =>{
    const reqBody = await req.json();
    try {
        const {email, password} = reqBody;
        const user = await UserModel.findOne({email});
        
        if(!user){
            return NextResponse.json({success:false, message:"User not found"})
        };

        const isPwdMatch = bcrypt.compare(user.password, password);
        if(!isPwdMatch){
            return NextResponse.json({success:false, message:"Incorrect Paasword"});
        };

        const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY);

        return NextResponse.json({success:true, token, user, message:"User login successfully"});

    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false, message:"Error"});
    }
};

export async function POST(req) {
    return loginUser(req);
}