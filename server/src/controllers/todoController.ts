import { Request, Response } from "express";

import Todo from "../models/todoModel";

export const listAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
    res.end();
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body;

    const newTodo = new Todo({
      title,
      description,
      dueDate,
    });

    const createdTodo = await newTodo.save();

    res.status(201).json(createdTodo);
    res.end();
  } catch (error) {
    res.status(500);
  }
};
