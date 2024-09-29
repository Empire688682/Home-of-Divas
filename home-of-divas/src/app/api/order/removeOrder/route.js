import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
connectDB();

export async function POST(req) {
    const { orderId } = await req.json();
    try {
        const order = await OrderModel.findById({ _id: orderId });
        if (!order) {
            return new NextResponse(JSON.stringify({ success: false, message: "No order found" }, { status: 400 }));
        }

        const updateOrderModel = await OrderModel.findByIdAndDelete(orderId);
        return new NextResponse(JSON.stringify({ success: true, message: "order deleted successful" }));
    } catch (error) {
        console.log("ERROR:", error);
        return new NextResponse(JSON.stringify({ success: false, message: "No order found" }, { status: 500 }));
    }
}