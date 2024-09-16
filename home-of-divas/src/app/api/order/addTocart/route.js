import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";
import { UserModel } from "@/model/userModel";
import { userToken } from "@/helper/getUserToken";

connectDB();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { itemId } = reqBody;
        const userId = await userToken(req);
        console.log("userId:", userId);

        const user = await UserModel.findById(userId);

        if (!itemId || !userId) {
            return new NextResponse(JSON.stringify({ success: false, message: "All fields required" }), {status:401});
        }

        const product = await ProductModel.findById(itemId);
        if (!product) {
            return new NextResponse(JSON.stringify({ success: false, message: "Product not found" }), {status:401});
        }

        if (!user) {
            return new NextResponse(JSON.stringify({ success: false, message: "User not Authenticated" }), {status:401});
        }

        let cartData = user.userCartData || {};

        if (!cartData[itemId]) {
            cartData[itemId] = 1;
        } else {
            cartData[itemId] += 1;
        }

        await UserModel.findByIdAndUpdate(userId, { userCartData: cartData });

        return NextResponse.json({ success: true, message: "Product added to cart" });
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}

