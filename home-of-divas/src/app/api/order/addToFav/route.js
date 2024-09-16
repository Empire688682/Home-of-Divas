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

        userFavData = userFavData || {};

        let favData = user.userFavData;
        if (!favData[favId]) {
            favData[favId] = 1;
        } else if (favData[favId] === 1) {
            favData[favId] = 0;
        } else if (favData[favId] === 0) {
            favData[favId] = 1;
        } else {
            return NextResponse.json({ success: false, message: "Something went wrong" });
        }
    
        await user.save();
        console.log("favData:", favData);
        console.log("user:", user);

        return NextResponse.json({ success: true, data:favData, message: "Product added to your favorite list" });
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}