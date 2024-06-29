import { Router } from "express";
import { createUser, listAllUsers } from "../controllers/todoController";

const router = Router();

router.get("/todos", listAllUsers);
router.post("/todos", createUser);

export default router;
