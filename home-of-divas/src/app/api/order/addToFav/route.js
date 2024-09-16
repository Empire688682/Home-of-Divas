import { UserModel } from "@/model/userModel";
import { ProductModel } from "@/model/productModel";
import { connectDB } from "@/ConnectDB/ConnectDB";
import { userToken } from "@/helper/getUserToken";
import { NextResponse } from "next/server";
connectDB();

export async function POST(req) {
    try {
        const userId = await userToken(req);
        const reqBody = await req.json();
        const { favId } = reqBody;
        const user = await UserModel.findById(userId);
        const product = await ProductModel.findById(favId);
        if (!product) {
            return new NextResponse(JSON.stringify({ success: false, message: "Product not found" }), {status:401});
        }
        if (!user) {
            return new NextResponse(JSON.stringify({ success: false, message: "User not Authenticated" }), {status:401});
        }

        if (!user.userFavData) {
            user.userFavData = {};
        }

        let favData = user.userFavData || {};

        if (favData[favId] === 1) {
            favData[favId] = 0; 
        } else {
            favData[favId] = 1; 
        }

        console.log("favData:", favData);
        console.log("user:", user);
    
        await user.save()
        return NextResponse.json({ success: true, data:favData, message: "Product added to your favorite list" });
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}