import nextconnect from 'next-connect'
import { connectDB } from "@/ConnectDB/ConnectDB";
import { upload } from "@/helper/imageUploader";
import { ItemModel } from "@/model/itemModel";

connectDB();

const handler = nextconnect();

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