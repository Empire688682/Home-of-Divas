import mongoose from 'mongoose';

// Define the main user schema
const userSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  dBirth: { type: String, required: true },
  userOrderData: { type: Object, default:{}},
  userOrderHistory: { type: Object, default:{}},
  userCartData: { type: Object, default:{}},
  userFavData: { type: Object, default:{}},
  isAdmin: {type: Boolean, default:false},
}, {minimize:false});

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
