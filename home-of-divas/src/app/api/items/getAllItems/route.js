import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";


export async function post(req) {
    connectDB()
    try {
        const allProduct = await ProductModel.find({});
        if(!allProduct){
            return NextResponse.json({success:false, message:"No product available"})
        }
        return NextResponse.json({success:true, allProduct, message:"All product fetched successfully"})
    } catch (error) {
        console.log("error:", error);
        return NextResponse.json({success:false, message:"ERROR"});
    }
}