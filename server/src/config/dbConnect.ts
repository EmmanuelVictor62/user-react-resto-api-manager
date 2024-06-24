import mongoose from "mongoose";
import { dotenvConfig } from "./envConfig";

dotenvConfig();

const uri = process.env.MONGODB_URI!;

const client = mongoose.connect(uri);

const connectDb = async () => {
  try {
    await client;
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
