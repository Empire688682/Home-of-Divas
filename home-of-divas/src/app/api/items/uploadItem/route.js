import multer from 'multer';
import { ItemModel } from '@/model/itemModel';
import path from 'path';
import fs from 'fs';
import { connectDB } from '@/ConnectDB/ConnectDB';
import { NextResponse } from 'next/server';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
     return cb(null, `${Date.now()}_${file.originalname}`);
    }
  })
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadItems = async (req,res)=>{
    if(req.method === 'POST'){

        try {

            const uploadDir = "./public/uploads";
            if(!fs.existsSync(uploadDir)){
                fs.mkdirSync(uploadDir, {recursive:true});
            };

            upload.single("image")(req, res, async (error)=>{
                if(error){
                    return NextResponse.json({success:false, message:"Failed to upload file"});
                }
            });

            const file = req.file;
            if(!file){
                return NextResponse.json({success:false, message:"No file uploaded"});
            }

            const {name, price, category} = JSON.parse(req.body.data);

           await connectDB();

            const newItem = new ItemModel({
                name,
                price,
                category,
                image:file.filename
            });

            await newItem.save();

            return NextResponse.json({success:true, newItem, message:"File uploaded successfully"});
            
        } catch (error) {
           console.log("ERROR:", error);
           return NextResponse.json({success:false, message:"Upload file error"});
        }
    }
}

export async function POST(req) {
    return uploadItems(req);
}