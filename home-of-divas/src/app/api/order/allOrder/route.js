import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";
import { NextResponse } from "next/server";
connectDB();

export async function GET() {
    try {
        const orders = await ProductModel.find({});
        return new NextResponse(JSON.stringify({orders}, { status: 200 }));
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }, {status: 500,}));
    }
}