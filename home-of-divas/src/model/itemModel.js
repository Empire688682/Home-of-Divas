import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:String, required:true},
    image:{type:String, required:true}
});

export const ItemModel = mongoose.models.Item || mongoose.model("Item", itemSchema);