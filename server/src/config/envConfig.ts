import dotenv from "dotenv";
import path from "path";

export const dotenvConfig = () => {
  const env =
    process.env.NODE_ENV === "production"
      ? ".env.production"
      : ".env.development";

  return dotenv.config({ path: path.resolve(__dirname, "../..", env) });
};
