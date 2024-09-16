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
        if (!user || !product) {
            return NextResponse.json({ success: false, message: "User or Product not found" });
        }

        if (!user.userFavData) {
            user.userFavData = {};
        }

        let favData = user.userFavData || {};
        if (favData[favId]) {
            favData[favId] = 0;
            return NextResponse.json({ success: true, data: favData, message: "Product removed from your favorite list" });
        } else{
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