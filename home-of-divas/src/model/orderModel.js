import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
});
const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
})
const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    address: { type: AddressSchema, required: true },
    item: { type: ItemSchema, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false },
    status: { type: String, default: "Food Processing" },
});

export const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema);