import mongoose from 'mongoose';

// Define the schema for userData separately
const userDataSchema = new mongoose.Schema({
  cart: { type: Array, default: [] },
  fav: { type: Array, default: [] },
  order: { type: Array, default: [] }
});

// Define the main user schema
const userSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  dBirth: { type: String, required: true },
  userDData: { type: userDataSchema, default:{}} // Use the defined schema and set default to an empty object
});

export const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
