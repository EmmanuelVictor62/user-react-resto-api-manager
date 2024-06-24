import express, { Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Route definition
app.get("/", (req: Request, res: Response) => {
  res.send([
    { name: "John doe", age: 23 },
    { name: "Hiliary", age: 30 },
  ]);
});

export default app;
