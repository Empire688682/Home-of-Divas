import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from 'fs/promises';
import fs from 'fs';
import { connectDB } from "@/ConnectDB/ConnectDB";
import { ProductModel } from "@/model/productModel";

export async function POST(req) {
    try {
        const formData = await req.formData();

        console.log('Form data:', formData);

        const name = formData.get("name");
        const itemDescription = formData.get("itemDescription");
        console.log('itemDescription:', itemDescription);
        const price = formData.get("price");
        const category = formData.get("category");
        const images = [];
        const imageFields = ['image', 'image1', 'image2', 'image3'];

        const hasImages = imageFields.some((field) => formData.get(field));
        if (!name  || !category || !price || !hasImages) {
            return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });
        }


        const uploadDir = path.join(process.cwd(), "public/uploads");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        };

        for (const fieldName of imageFields) {
            const image = formData.get(fieldName);

            if (image) {
                const bytes = await image.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const imageName = Date.now() + "_Divas_" + image.name;
                const filepath = path.join(uploadDir, imageName);
                await writeFile(filepath, buffer);
                images.push(imageName);
            }
        }

        await connectDB();

        console.log("IMAGES:", images);
        console.log("itemDescription:", itemDescription);

        const newItem = new ProductModel({
            name,
            price,
            category,
            itemDescription,
            images
        });

        await newItem.save();

        return NextResponse.json({ success: true, newItem, message: "File uploaded successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error occurred:", error);
        return NextResponse.json({ success: false, message: "An error occurred while uploading the file" }, { status: 500 });
    }
}