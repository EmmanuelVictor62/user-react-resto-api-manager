import express, { Response, Request } from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(
  express.json({ limit: "20mb" }),
  express.urlencoded({ limit: "10mb", extended: true })
);

// Route definition
app.get("/", (req: Request, res: Response) => {
  res.send(
    "Users db collections, route to the /api/users to make an initial request"
  );
});

app.use("/api", userRoutes);

export default app;
