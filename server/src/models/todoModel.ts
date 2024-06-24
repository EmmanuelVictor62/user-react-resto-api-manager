import mongoose, { Date, Document, Schema, model } from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

const todoSchema = new Schema<ITodo>({
  title: {
    type: String,
    required: [true, "Oops, no name added"],
  },
  description: {
    type: String,
    required: [true, "Oops, no description added"],
  },
  dueDate: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

const Todo = model<ITodo>("Todo", todoSchema);

export default Todo;
