import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://g143pay:zoT3YRJT3N8qSMo8@cluster0.xg9s1nk.mongodb.net/";

let isConnected = false;

const mongoConnect = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGO_URL);
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default mongoConnect;
