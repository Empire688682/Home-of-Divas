import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from 'fs/promises';
import fs from 'fs';
import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";

export async function POST(req) {
    try {
        const formData = await req.formData();

        const name = formData.get("name");
        const price = formData.get("price");
        const category = formData.get("category");
        const image = formData.get("image");

        if (!name || !category || !price || !image) {
            return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });
        }

        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const imageName = Date.now() + "_" +"Divas_"+ image.name;
        const filepath = path.join(uploadDir, imageName);
        await writeFile(filepath, buffer);

        await connectDB();

        const newItem = new ProductModel({
            name,
            price,
            category,
            image: imageName
        });

        await newItem.save();

        return NextResponse.json({ success: true, newItem, message: "File uploaded successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error occurred:", error);
        return NextResponse.json({ success: false, message: "An error occurred while uploading the file" }, { status: 500 });
    }
}