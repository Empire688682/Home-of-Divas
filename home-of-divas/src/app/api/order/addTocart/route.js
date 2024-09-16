import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";
import { UserModel } from "@/model/userModel";
import { userToken } from "@/helper/getUserToken";
connectDB();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { itemId, token} = reqBody;
        const userId = await userToken(token)
        const user = await UserModel.findById(userId);
        console.log("userId:", userId);
        console.log("itemId:", itemId);
        if(!itemId){
            return NextResponse.json({ success: false, message: "All fields required" });
        }

        const product = await ProductModel.findById(productId);
        if(!product){
            return NextResponse.json({ success: false, message: "Product not found" });
        }

        if(!user){
            return NextResponse.json({success:false, message:"User authentiction failed"});
        }

        let cartData = user.userCartData;

        if(!cartData[itemId]){
            cartData[itemId] = 1
        }else{
            cartData[itemId] += 1
        }

        await UserModel.findByIdAndUpdate(userId);

        return NextResponse.json({ success: true, message: "Product added to cart" });

    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}