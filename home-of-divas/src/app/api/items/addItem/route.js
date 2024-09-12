import { connectDB } from "@/ConnectDB/ConnectDB";
import { upload } from "@/helper/imageUploader";
import { ItemModel } from "@/model/itemModel";
import { NextResponse } from "next/server";
import nextConnect from nextConnect

connectDB();

const handler = nextConnect();

handler.use(upload.single("image"))

handler.POST(async (req, res) =>{
    try {
        const {name, category, price} = req.body;
        if(!name || !category || !price || !req.file){
            return res.json({success:false, message:"All fileds required"})
        }

        console.log("FileName:", req.file.filename)
        const newItem = new ItemModel({
            name,
            category,
            price,
            image:req.file.filename
        });

        await newItem.save();

        return res.json({success:false, message:"Item added"});
    } catch (error) {
        console.log("AddItemError:", error);
        return  res.json({success:false, message:"Unable to add Item"})
    }
}) ;

export default handler