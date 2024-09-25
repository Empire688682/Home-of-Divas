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
        let userOrderHistory = user.userOrderHistory || {};
        if(!userOrderHistory[newOrder._id]) {
            userOrderHistory.push(newOrder._id);
        }

        // Add order to user's order data
        let userOrderData = user.userOrderData || {};
        if(!userOrderData[newOrder._id]) {
            userOrderData.push(newOrder._id);
        }
        console.log("USERORDERDATA:", userOrderData);
        console.log("USERORDERHistory:", userOrderHistory);
        console.log("USERBEFORE:", user);
        await user.save();
        console.log("USERAFTER:", user);

        await UserModel.findByIdAndUpdate(userId, { userCartData: {}, userOrderData: userOrderData, userOrderHistory: user.userOrderHistory });

        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error placing order' });
    }
}