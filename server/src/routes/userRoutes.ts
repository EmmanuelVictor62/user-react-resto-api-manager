import { Router } from "express";
import { createUser, listAllUsers } from "../controllers/userController";

const router = Router();

router.get("/users", listAllUsers);

router.post("/users", createUser);

export default router;
