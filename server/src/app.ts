import express, { Response, Request } from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConnect";

import todoRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
connectDb();

// Route definition
app.get("/", (req: Request, res: Response) => {
  res.send([
    { name: "John doe", age: 23 },
    { name: "Hiliary", age: 30 },
  ]);
});

app.use("/api", todoRoutes);

export default app;
