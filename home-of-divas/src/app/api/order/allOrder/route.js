import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
connectDB();

export async function GET() {
    try {
        const orders = await OrderModel.find({});
        return new NextResponse(JSON.stringify({success:true, data:orders}, { status: 200 }));
    } catch (error) {
        return new NextResponse(JSON.stringify({success:false, error: error.message }, {status: 500,}));
    }
}