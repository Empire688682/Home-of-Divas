import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
connectDB();

export async function POST(req) {
    const reqBody = await req.json();
    try {
        const { addressData, cartData, paymentMethod } = reqBody;
        const userId = await userToken(req);
        if (!userId) {
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }
        if (!addressData || !cartData || !paymentMethod) {
            return NextResponse.json({ success: false, message: 'All fields required' });
        }
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        const newOrder = new OrderModel({
            userId,
            addressData,
            cartData,
            paymentMethod,
        });
        await newOrder.save();
        await UserModel.findByIdAndUpdate(userId, { userCartData: {} });

        // Add order to user's order history
        if (user.userOrderHistory) {
            user.userOrderHistory.push(newOrder._id);
        } else {
            user.userOrderHistory = [newOrder._id];
        }
        await user.save();
        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error placing order' });
    }
}