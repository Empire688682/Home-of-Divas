import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{type:String, required:true},
    itemDescription:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:String, required:true},
    images:{type:Array, required:true}
});

export const ProductModel = mongoose.models.Item || mongoose.model("Item", itemSchema);