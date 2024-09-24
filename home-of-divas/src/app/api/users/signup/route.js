import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server.js";
import { connectDB } from "@/ConnectDB/ConnectDB.js";
import { UserModel } from '@/model/userModel';

connectDB();

// register function goes here
const registerUser = async (req) => {
    const reqBody = await req.json();
    const { fName, lName, email, gender, password, pwdRepeat, dBirth } = reqBody;
    try {
        if (!fName || !lName || !email || !gender || !password || !pwdRepeat || !dBirth) {
            return NextResponse.json({ success: false, message: "All fields required" });
        }
        const userExist = await UserModel.findOne({ email });
        if (userExist) {
            return NextResponse.json({ success: false, message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return NextResponse.json({ success: false, message: "Enter a valid email" });
        }
        if (password.length < 8) {
            return NextResponse.json({ success: false, message: "Password too short" });
        }
        if (password !== pwdRepeat) {
            return NextResponse.json({ success: false, message: "Password not match" });
        }

        const passwordHashed = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            fName,
            lName,
            email,
            gender,
            dBirth,
            password: passwordHashed,
            userCartData:{},
            userFavData:{},
        });

        await newUser.save();

        const user = await UserModel.findOne({ email }).select('-password -_id')
        const userData = {
            email,
            fName,
            lName,
            gender,
            dBirth
        }

        console.log("user:", user._id);

        const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY);
        const res = NextResponse.json({
            success: true,
            message: "User signed up",
            token,
            user: userData
        })
        res.cookies.set('DCToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 2 * 24 * 60 * 60,
            sameSite: "lax",
            path: "/"
        });
        return res

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
};

export async function POST(req) {
    return registerUser(req)
}