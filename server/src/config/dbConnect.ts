import mongoose from "mongoose";
import { dotenvConfig } from "./envConfig";
import { ServerApiVersion } from "mongodb";

dotenvConfig();

const uri = process.env.MONGODB_URI!;

const connectDb = async () => {
  try {
    await mongoose.connect(uri, {
      serverApi: { strict: true, version: ServerApiVersion.v1 },
    });
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
