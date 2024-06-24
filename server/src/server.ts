import app from "./app";
import { dotenvConfig } from "./config/envConfig";

dotenvConfig();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
