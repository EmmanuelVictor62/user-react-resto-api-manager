import app from "./app";
import connectDb from "./config/dbConnect";
import { dotenvConfig } from "./config/envConfig";

dotenvConfig();
connectDb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
