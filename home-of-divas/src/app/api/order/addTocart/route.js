import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";
import { UserModel } from "@/model/userModel";
import { userToken } from "@/helper/getUserToken";
connectDB();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { productId, token} = reqBody;
        const userId = await userToken(token)
        if(!productId){
            return NextResponse.json({ success: false, message: "All fields required" });
        }

        const product = await ProductModel.findById(productId);
        if(!product){
            return NextResponse.json({ success: false, message: "Product not found" });
        }

        const user = await UserModel.findById(userId);
        if(!user){
            return NextResponse.json({success:false, message:"User authentiction failed"});
        }

        user.userCartData = user.userCartData;

        if(!user.userCartData[productId]){
            user.userCartData[productId] = 1
        }else{
            user.userCartData[productId] += 1
        }

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}