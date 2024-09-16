import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
connectDB();

export async function POST(request) {
    try {
        const body = await request.json();
        const { userId, name, address, city, state, zip, country, email, phone, order, total } = body;
        const newOrder = new OrderModel({ 
            userId,
             name, 
             address, 
             city, 
             state, 
             zip, 
             country, 
             email, 
             phone, 
             order, 
             total });
        await newOrder.save();
        return NextResponse.json({ success: true, message: "Order created successfully" }, { status: 200 });
    } catch (error) {
        console.log("ERROR:", error);
        return NextResponse.json({ success: false, message: "ERROR" }, { status: 500 });
    }