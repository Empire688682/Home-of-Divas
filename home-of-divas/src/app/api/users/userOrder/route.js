import { connectDB } from "@/ConnectDB/ConnectDB";
import { userToken } from "@/helper/getUserToken";
import { OrderModel } from "@/model/orderModel";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
connectDB();

export async function GET(req) {
    try {
        const userId = await userToken(req);
        const user = await UserModel.findById({ _id: userId });
        if (!user || !userId) {
            return NextResponse.json({ success: false, message: "User not authenticated" });
        };

        const userOrderData = user.userOrderData;
        const ordersId = Object.keys(userOrderData);

        if (!ordersId.length) {
            return NextResponse.json({ success: true, data: [] });
        };
        const objectIds = ordersId.map(id=> new mongoose.Types.ObjectId(id));
        const orders = await OrderModel.find({ _id: { $in: objectIds }});

        return NextResponse.json({ success: true, data:orders, message:"Order fetched successfully" });
    } catch (error) {
        console.log("ERROR:", error);
        return NextResponse.json({ success: false, message: "User not authenticated" });
    }
}