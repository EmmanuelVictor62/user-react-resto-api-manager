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
    required: [true, "Oops, no description added"],
  },
  userName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: [false],
  },
});

const User = model<IUser>("User", userSchema);

export default User;
