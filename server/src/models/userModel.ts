import mongoose, { Date, Document, Schema, model } from "mongoose";

interface IUser extends Document {
  id: string | undefined | null;
  organisation: string | undefined | null;
  userName: string | undefined | null;
  phoneNumber: string | undefined | null;
  dateJoined: string | undefined | null;
  status: string | undefined | null;
  bank: string | undefined | null;
  accountBalance: string | undefined | null;
  educationLevel: string | undefined | null;
  employmentStatus: string | undefined | null;
  employementSector: string | undefined | null;
  officeEmail: string | undefined | null;
  guarantor: string | undefined | null;
  guarantorPhoneNo: string | undefined | null;
  guarantorRelationship: string | undefined | null;
  guarantorEmail: string | undefined | null;
}

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: [true, "No user id added"],
  },
  organisation: {
    type: String,
    required: [true, "Oops, no organisation added"],
  },
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: [false],
  },
  dateJoined: {
    type: String,
    required: [false],
  },
  status: {
    type: String,
    required: [false],
  },
  bank: {
    type: String,
    required: [false],
  },
  accountBalance: {
    type: String,
    required: [false],
  },
  educationLevel: {
    type: String,
    required: [false],
  },
  employmentStatus: {
    type: String,
    required: [false],
  },
  employementSector: {
    type: String,
    required: [false],
  },
  officeEmail: {
    type: String,
    required: [false],
  },
  guarantor: {
    type: String,
    required: [false],
  },
  guarantorPhoneNo: {
    type: String,
    required: [false],
  },
  guarantorRelationship: {
    type: String,
    required: [false],
  },
  guarantorEmail: {
    type: String,
    required: [false],
  },
});

const User = model<IUser>("User", userSchema);

export default User;
