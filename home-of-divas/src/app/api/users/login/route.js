import { connectDB } from "@/ConnectDB/ConnectDB";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
connectDB();

const loginUser = async (req) => {
    const reqBody = await req.json();
    try {
        const { email, password } = reqBody;
        const user = await UserModel.findOne({ email })

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" })
        };

        const isPwdMatch = await bcrypt.compare(password, user.password);
        if (!isPwdMatch) {
            return NextResponse.json({ success: false, message: "Incorrect Paasword" });
        };

        const userData = {
            email: user.email,
            fName: user.fName,
            lName: user.lName,
            gender: user.gender,
            dBirth: user.dBirth
        }

        const token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, { expiresIn: '2d' });
        const isUserAdmin = user.isAdmin;
        const res = NextResponse.json({ success: true, token, user:userData, message: "User login successfully" });
        res.cookies.set('DCToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 2 * 24 * 60 * 60,
            sameSite: "lax",
            path: "/"
        });
        res.cookies.set('DCIsAdmin', isUserAdmin, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 2 * 24 * 60 * 60,
            sameSite: "lax",
            path: "/"
        });
        return res

    } catch (error) {
        console.log("Login error:", error);
    return NextResponse.json({ success: false, message: "An error occurred during login" });
    }
};

export async function POST(req) {
    return loginUser(req);
}