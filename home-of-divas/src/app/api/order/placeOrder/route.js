import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
import mongoose from "mongoose";
connectDB();

export async function POST(req) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const reqBody = await req.json();
        const { itemData } = reqBody;
        const { addressData, item, paymentMethod, total } = itemData;
        const userId = await userToken(req);
        console.log("USERID:", userId);
        if (!userId) {
            session.abortTransaction();
            session.endSession();
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }
        if (!addressData || !item || !paymentMethod || !total) {
            session.abortTransaction();
            session.endSession();
            return NextResponse.json({ success: false, message: 'All fields required' });
        }
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
            session.abortTransaction();
            session.endSession();
        }

        const newOrder = new OrderModel({
            userId: user._id,
            addressData,
            item,
            paymentMethod,
            total
        });
        await newOrder.save({session});

        let userOrderData = user.userOrderData || {};
        let userOrderHistory = user.userOrderHistory || {};

        if(!userOrderData[newOrder._id]){
            userOrderData[newOrder._id] = true
        }
        if(!userOrderHistory[newOrder._id]){
            userOrderHistory[newOrder._id] = true
        }

        user.userOrderData = userOrderData;
        user.userOrderHistory = userOrderHistory;

        await user.save({session});

        session.commitTransaction();
        session.endSession();

        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        session.abortTransaction();
        session.endSession();
        return NextResponse.json({ success: false, message: 'Error placing order' });
    }
}