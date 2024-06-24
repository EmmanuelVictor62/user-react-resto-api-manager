import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const dotenvConfig = () => {
  const env =
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development";

  dotenv.config({ path: path.resolve(__dirname, "..", env) });
};
