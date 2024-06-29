import mongoose, { Date, Document, Schema, model } from "mongoose";

interface IUser extends Document {
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

const userSchema = new Schema<IUser>({
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

const User = model<IUser>("User", userSchema);

export default User;
