import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";


export async function POST(req) {
    const {itemId} = await req.json();
    try {
        connectDB();
        const data = await ProductModel.findById(itemId);
        if(!data){
            return NextResponse.json({success:false, message:"No product available"})
        }
        return NextResponse.json({success:true, data:data, message:"Product fetched successfully"})
    } catch (error) {
        console.log("error:", error);
        return NextResponse.json({success:false, message:"ERROR"});
    }
}