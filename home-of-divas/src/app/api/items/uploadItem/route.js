import multer from "multer";
import fs from 'fs';
import { connectDB } from "@/ConnectDB/ConnectDB";
import path from "path";
import { NextResponse } from "next/server";
import { error } from "console";

const upload = multer.diskStorage({
    destination:"./public/uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

export const config = {
    api:{
        bodyParser:false
    }
}

const uploadItem = async (req) =>{
   if(req.method === "POST"){
    try {
        // Ensure the uploads directory exists
        const uploadDir = './public/uploads';
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive:true});
        };

        // Use multer to handle the file upload
        upload.single("image")(req, async (error) =>{
            if(error){
                return NextResponse.json({success:false, message:"Error uploading file"})
            }
        });

        const file = req.file;
        if(!file){
            return NextResponse.json({success:false, message:"No file uploaded"})
        }

        

        const reqBody = await req.json();

        const {name, category, price} = reqBody;
        if(!name || !category || !price || !image){
            return NextResponse.json({success:false, message:"All fileds requred"})
        }

        
    } catch (error) {
        console.log("ERROR:", error);
        return NextResponse.json({success:false, message:"UploadItem Error"})
    }
   }
}

export async function POST(req) {
    return uploadItem(req);
};