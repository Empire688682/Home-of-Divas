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

        const user = await UserModel.findById(userId);

        if (!itemId || !userId) {
            return NextResponse.json({ success: false, message: "All fields required" });
        }

        const product = await ProductModel.findById(itemId);
        if (!product) {
            return NextResponse.json({ success: false, message: "Product not found" });
        }

        if (!user) {
            return NextResponse.json({ success: false, message: "User authentication failed" });
        }

        let cartData = user.userCartData || {};

        if (cartData[itemId] >= 0) {
            cartData[itemId] -= 1;
        }

        await UserModel.findByIdAndUpdate(userId, { userCartData: cartData });

        return NextResponse.json({ success: true, message: "Product remove from cart" });
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}

