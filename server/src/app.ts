import express, { Response, Request } from "express";
import dotenv from "dotenv";

import todoRoutes from "./routes/todoRoutes";

dotenv.config();
const app = express();

// Route definition
app.get("/", (req: Request, res: Response) => {
  res.send([
    { name: "John doe", age: 23 },
    { name: "Hiliary", age: 30 },
  ]);
});

app.use("/api", todoRoutes);

export default app;
