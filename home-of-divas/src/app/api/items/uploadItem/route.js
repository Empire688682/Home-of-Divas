import { ItemModel } from "@/model/itemModel";
import multer from "multer";
import fs from 'fs';
import { connectDB } from "@/ConnectDB/ConnectDB";
import path, { resolve } from "path";
import { rejects } from "assert";
import { error } from "console";

const upload = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    }
});

export const config = {
    api: {
        bodyParser: false
    }
}

const uploadItems = async (req, res) => {
    if (req.method !== "POST") {
        return new Response(JSON.stringify({ success: false, message: "Method not allowed" }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Ensure the uploads directory exists
        const uloadDir = "./public/uploads";
        if (!fs.existsSync(uloadDir)) {
            fs.mkdirSync(uloadDir, { recursive: true });
        };

        // Use multer to handle the file upload
        await new promise((resolve, rejects) => {
            upload.single("image")(req, res, (error) => {
                if (error) {
                    rejects(error)
                }
                else {
                    resolve()
                }
            })
        });

        const file = req.file;

        if (!file) {
            return new Response(JSON.stringify({ success: false, message: "No file uploaded" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        };

        const formData = new FormData();
        const name = formData.get("name");
        const price = formData.get("price");
        const category = formData.get("category");

        if (!name || !category || !price) {
            return new Response(JSON.stringify({ success: false, message: "All fields required" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        await connectDB();

        const newItem = new ItemModel({
            name,
            category,
            price: parseFloat(price),
            description,
            image: file.filename
        });

        await newItem.save();

        return new Response(JSON.stringify({ success: true, newItem, message: "Item added successfully" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });


    } catch (error) {
        console.log("ERROR:", error);
        return new Response(JSON.stringify({ success: false, message: "UploadItem Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });

    }
}

export async function POST(req) {
    return uploadItems(req);
}