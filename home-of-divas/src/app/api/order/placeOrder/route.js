import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
connectDB();

export async function POST(req) {
    const reqBody = await req.json();
    const { addressData, cartData, paymentMethod} = reqBody;
    const userId = await userToken(req);
    if (!userId) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
    const user = await OrderModel.create({ address, paymentMethod, cartData, userId });
    if (!user) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
}