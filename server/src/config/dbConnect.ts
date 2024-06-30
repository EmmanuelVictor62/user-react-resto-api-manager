import { connect, connection } from "mongoose";
import { dotenvConfig } from "./envConfig";

dotenvConfig();

const uri = process.env.MONGODB_URI!;

export const db = connection.useDb("usersDb");

const dbConnect = {
  connect: async () => {
    try {
      await connect(uri);
      console.log("connected db");
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },

  stop: async () => {
    try {
      return await connection.destroy();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  },
};

export default dbConnect;
