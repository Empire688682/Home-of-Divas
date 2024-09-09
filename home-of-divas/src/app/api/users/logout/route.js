import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const logoutUser  = () =>{
    const res = NextResponse.json({succes:true, message:"User LogOut"});
    res.cookies.set("DCToken", '', {
        httpOnly:true,
        expires: Date.now()
    });
    return res
}

export async function GET() {
    return logoutUser();
}