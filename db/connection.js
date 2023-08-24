import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", false);
const DB = process.env.MONGO_URI;

export const connect = async () => {
  try {
    await mongoose.connect(DB);
    console.log("connected to mongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
