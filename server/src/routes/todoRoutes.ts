import { Router } from "express";
import { createTodo, listAllTodos } from "../controllers/todoController";

const router = Router();

router.get("/todos", listAllTodos);
router.post("/todos", createTodo);

export default router;
