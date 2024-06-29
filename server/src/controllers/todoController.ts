import { Request, Response } from "express";

import User from "../models/todoModel";

export const listAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
    res.end();
  } catch (error) {
    console.error("request failed");
    res.status(500).json({ message: "Server Error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate } = req.body;

    const newUser = new User({
      title,
      description,
      dueDate,
    });

    const createdTodo = await newUser.save();

    res.status(201).json(createdTodo);
    res.end();
  } catch (error) {
    res.status(500);
  }
};
