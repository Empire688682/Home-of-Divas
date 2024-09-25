import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
connectDB();

export async function POST(req) {
    const reqBody = await req.json();
    try {
        const {itemData } = reqBody;
        const {addressData, item, paymentMethod, total} = itemData;
        const userId = await userToken(req);
        console.log("USERID:", userId);
        if (!userId) {
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }
        if (!addressData || !item || !paymentMethod || !total) {
            return NextResponse.json({ success: false, message: 'All fields required' });
        }
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        const newOrder = new OrderModel({
            userId: user._id,
            addressData,
            item,
            paymentMethod,
            total
        });
        await newOrder.save();

        // Add order to user's order history
        if (user.userOrderHistory) {
            user.userOrderHistory.push(newOrder._id);
        } else {
            user.userOrderHistory = [newOrder._id];
        }

        // add order to user's order data
        let userCartData = user.userCartData || {};
        if (user.userOrderData) {
            user.userOrderData.push(newOrder._id);
        } else {
            user.userOrderData = [newOrder._id];
        }
        await user.save();
        console.log("USERAFTER:", user);

        await UserModel.findByIdAndUpdate(userId, { userCartData: {} });

        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error placing order' });
    }
}