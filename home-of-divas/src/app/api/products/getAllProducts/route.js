import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        connectDB()
        const data = await ProductModel.find({});
        if(!data){
            return NextResponse.json({success:false, message:"No product available"})
        }
        console.log("data:", data)
        return NextResponse.json({success:true, data:data, message:"All product fetched successfully"})
    } catch (error) {
        console.log("error:", error);
        return NextResponse.json({success:false, message:"ERROR"});
    }
}