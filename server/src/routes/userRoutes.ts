import { Router } from "express";
import { createUser, listAllUsers } from "../controllers/userController";

const router = Router();

router.get("/users", listAllUsers);

router.post("/user", createUser);

export default router;
