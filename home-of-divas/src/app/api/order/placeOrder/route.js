import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";

connectDB();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { itemData } = reqBody;
        const { addressData, item, paymentMethod, total } = itemData;

        // Get user ID from token
        const userId = await userToken(req);
        if (!userId) {
            return NextResponse.json({ success: false, message: 'User not authenticated' });
        }

        // Find user
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        // Ensure all required fields are present
        if (!addressData || !item || !paymentMethod || !total) {
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

        // Save order
        await newOrder.save();

        const updatedUser1 = await UserModel.findByIdAndUpdate(userId, {
            $set: {
                [`userOrderData.${newOrder._id}`]:true,
                [`userOrderHistory.${newOrder._id}`]:true,
            }
        }, {new:true});

        if (!updatedUser1) {
            console.error('User update failed');
        } else {
            console.log('Updated User1:', updatedUser1);
        }
        // After updating and saving the user
        const updatedUser = await UserModel.findById(userId);
        console.log('Updated User:', updatedUser);

        // Verify order in database
        const verifyOrder = await OrderModel.findById(newOrder._id);
        console.log('Verified Order:', verifyOrder);

        return NextResponse.json({ success: true, data: newOrder, message: 'Order placed successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Error placing order', error: error.message });
    }
}
