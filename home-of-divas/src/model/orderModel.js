import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    addressData: { type: Object, required: true },
    cartData: { type: Array, required: true },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false },
    total: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: "Food Processing" },
});

export const OrderModel = mongoose.models.Order || mongoose.model("Order", OrderSchema);