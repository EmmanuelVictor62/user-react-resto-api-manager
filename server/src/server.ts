import app from "./app";
import dbConnect from "./config/dbConnect";
import { dotenvConfig } from "./config/envConfig";

dotenvConfig();
dbConnect.connect();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
