import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server"
connectDB();

export async function POST(req) {
    const {orderId, stage} = await req.json();
    console.log("STAGE:", stage);
    try {
        if(!orderId || !stage){
            return NextResponse.json({success:false, message:"All field required"}, {status:400});
        };
        const order = await OrderModel.findById({_id:orderId});
        if(!order){
            return NextResponse.json({success:false, message:"No order found"}, {status:400});
        };

        await OrderModel.findByIdAndUpdate(orderId, {status:stage}, {new:true});

        return NextResponse.json({success:true, data:order.status, message:"Status updated"});
    } catch (error) {
        console.log("ERROR:", error);
        return NextResponse.json({success:false, message:"ERROR"}, {status:500});
    }
}