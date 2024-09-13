import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from 'fs/promises';

export const POST = async (req) => {
    const formData = await req.formData();

    const file = formData.get("image");
    if (!file) {
        return NextResponse.json({ success: false, message: "No file found" });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/\s/g, "-");
    console.log("filename:", filename);

    try {
        const uploadDir = path.join(process.cwd(), "public/uploads");
        await writeFile(path.join(uploadDir, filename), buffer);
        
        // You might want to save other form data to a database here
        // const name = formData.get("name");
        // const category = formData.get("category");
        // const price = formData.get("price");
        // ... save to database ...

        return NextResponse.json({ success: true, message: "File uploaded successfully" });
    } catch (error) {
        console.log("Error occurred:", error);
        return NextResponse.json({ success: false, message: "An error occurred while uploading the file" });
    }
};