import { connectDB } from "@/ConnectDB/ConnectDB";
import { OrderModel } from "@/model/orderModel";
import { NextResponse } from "next/server";
import { userToken } from "@/helper/getUserToken";
import { UserModel } from "@/model/userModel";
import paystack from 'paystack';

connectDB();

const paystackAPI = paystack(process.env.PAYSTACK_SECRET_KEY);  // Initialize Paystack

// Utility function to generate a random alphanumeric key of specified length
function generateRandomKey(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
}

// Function to initialize Paystack payment
const initializePaystackPayment = async (email, amount, metadata, callback_url) => {
    try {
        const response = await paystackAPI.transaction.initialize({
            email: email,  // Customer's email address
            amount: amount * 100,  // Paystack expects the amount in kobo (so multiply by 100)
            currency: 'NGN',  // Nigerian Naira
            metadata: metadata,  // Optional metadata (e.g. order details)
            callback_url: callback_url  // URL to redirect after payment
        });

        return response;  // Return Paystack's response
    } catch (error) {
        console.error("Error initializing payment:", error.message);
        throw new Error('Payment initialization failed');
    }
};

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

         // Generate random reference key
         const paymentReference = generateRandomKey(12);

         // Prepare item details for metadata
        const itemDetails = item.map(product => ({
            name: product.name,
            quantity: product.quantity,
            price: product.price
        }));

         // If payment method is Paystack, initialize Paystack payment
         if (paymentMethod === 'Paystack') {
            const callback_url = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-payment?reference=${paymentReference}`;
            const paystackResponse = await initializePaystackPayment(user.email, total, { items: itemDetails }, callback_url);
            console.log("URL:", paystackResponse.data.authorization_url);
            if (!paystackResponse.status) {
                return NextResponse.json({ success: false, message: 'Failed to initialize Paystack payment' });
            }

            return NextResponse.json({
                success: true,
                authorization_url: paystackResponse.data.authorization_url,
                reference: paymentReference
            });
        }

        // Create a new order
        const newOrder = new OrderModel({
            userId: user._id,
            addressData,
            item,
            paymentMethod,
            total,
            paymentReference
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
