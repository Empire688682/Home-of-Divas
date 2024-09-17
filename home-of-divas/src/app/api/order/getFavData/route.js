import { connectDB } from "@/ConnectDB/ConnectDB";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";
connectDB();

export async function GET(req) {
    try {
        const userId = userToken(req);
        if(!userId){
            return NextResponse.json({success:false, message:"Invalid Parser"})
        }
        const user = await UserModel.findById(userId);
        if(!user){
            return NextResponse.json({success:false, mesage:"No user found"})
        }
        const userFaveData = user.userFavData;
        return NextResponse.json({success:true, data:userFaveData, message:"User Fav Data founded"})
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({success:false, message:"Internal Server Error"})
    }
}