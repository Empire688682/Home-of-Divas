import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {id} = await req.json();

        connectDB();
       const product = await ProductModel.findById(id);

       if(!product){
        return NextResponse.json({success:false, message:"No product available"});
       } 

       await ProductModel.findByIdAndDelete(id);

       return NextResponse.json({success:true, message:"Product deleted successfully"});

    } catch (error) {
        console.log("error:", error);
        return NextResponse.json({success:false, message:"ERROR"});
    }
}