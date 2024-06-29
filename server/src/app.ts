import express, { Response, Request } from "express";
import dotenv from "dotenv";
import connectDb from "./config/dbConnect";

import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());

connectDb();

// Route definition
app.get("/", (req: Request, res: Response) => {
  res.send([
    { name: "John doe", age: 23 },
    { name: "Hiliary", age: 30 },
  ]);
});

app.use("/api", userRoutes);

export default app;
