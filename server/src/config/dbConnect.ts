import mongoose from "mongoose";
import { dotenvConfig } from "./envConfig";

dotenvConfig();

const uri = process.env.MONGODB_URI!;

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
