import { MongoClient } from "mongodb";
import { dotenvConfig } from "./envconfig";

dotenvConfig();

const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri);

const connectDb = async () => {
  try {
    await client.connect();
  } catch (error) {
    process.exit(1);
  }
};

export default connectDb;
