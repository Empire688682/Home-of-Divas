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

        // Get user ID from token
        const userId = await userToken(req);
        if (!userId) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }

        // Find user
        const user = await UserModel.findById(userId).session(session);
        if (!user) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        // Ensure all required fields are present
        if (!addressData || !item || !paymentMethod || !total) {
            await session.abortTransaction();
            return NextResponse.json({ success: false, message: 'All fields required' });
        }

        // Create a new order
        const newOrder = new OrderModel({
            userId: user._id,
            addressData,
            item,
            paymentMethod,
            total
        });

        // Save order with the current session
        await newOrder.save({ session });

        // Add order to user's order history and order data
        let userOrderHistory = user.userOrderHistory || {};
        let userOrderData = user.userOrderData || {};

        if (!userOrderHistory[newOrder._id]) {
            userOrderHistory[newOrder._id] = true;
        }

        if (!userOrderData[newOrder._id]) {
            userOrderData[newOrder._id] = true;
        }

        // Update user's order data and history
        user.userOrderHistory = userOrderHistory;
        user.userOrderData = userOrderData;

        // Save user with the current session
        await user.save({ session });

        // Commit the transaction only if no errors occurred
        await session.commitTransaction();
        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        // If any error occurs, abort the transaction
        await session.abortTransaction();
        return NextResponse.json({ success: false, message: 'Error placing order', error: error.message });
    } finally {
        // End the session regardless of success or failure
        session.endSession();
    }
}
