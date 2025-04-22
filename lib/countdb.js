import mongoose from "mongoose";

const MONGO_URL = "mongodb://127.0.0.1:27017/Count";

let isConnected = false; // to prevent multiple connections

const mongoConnect = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default mongoConnect;
