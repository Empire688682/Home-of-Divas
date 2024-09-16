import { connectDB } from "@/ConnectDB/ConnectDB";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
import { NextResponse } from "next/server";

export async function GET(req){
    try {
        connectDB();
        const userId = await userToken(req);
        if(!userId) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }

        const user = await UserModel.findById(userId);
        if(!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }
        let userCartData = await user.userCartData;
        
        return NextResponse.json({ success: true, data:userCartData, message: 'Cart data fetch successfully' });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: 'Error removing item to cart' });
    }
}
