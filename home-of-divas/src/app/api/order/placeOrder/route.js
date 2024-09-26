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
        if (!userId) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }

        const user = await UserModel.findById(userId).session(session);
        if (!user) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        if (!addressData || !item || !paymentMethod || !total) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'All fields required' });
        }

        const newOrder = new OrderModel({
            userId: user._id,
            addressData,
            item,
            paymentMethod,
            total
        });

        await newOrder.save({ session });

        // Update user order history and data
        let userOrderHistory = user.userOrderHistory || {};
        let userOrderData = user.userOrderData || {};

        if (!userOrderHistory[newOrder._id]) {
            userOrderHistory[newOrder._id] = true;
        }

        if (!userOrderData[newOrder._id]) {
            userOrderData[newOrder._id] = true;
        }

        user.userOrderHistory = userOrderHistory;
        user.userOrderData = userOrderData;

        const updatedUser = await user.save({ session });
        if (!updatedUser) {
            console.error("User save operation failed", user);
        } else {
            console.log("User updated successfully:", updatedUser);
        }

        await session.commitTransaction();
        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        await session.abortTransaction();
        return NextResponse.json({ success: false, message: 'Error placing order', error: error.message });
    } finally {
        session.endSession();
    }
}
